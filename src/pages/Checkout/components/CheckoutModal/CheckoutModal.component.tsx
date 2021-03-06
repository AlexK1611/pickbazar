import { FC } from 'react'
import ReactDOM from 'react-dom'

// redux
import { useSelector } from 'react-redux'
import { getDeliveryAddress, getPhoneNumber } from 'store/checkout/selectors'

// styled components
import {
    ModalBackground,
    ModalContent,
    CloseButton,
    CloseIcon
} from './CheckoutModal.styles'

// components
import { AddAddress } from '../AddAddress/AddAddress.component'
import { AddNumber } from '../AddNumber/AddNumber.component'
import { EditAddress } from '../EditAddress/EditAddress.component'
import { EditNumber } from '../EditNumber/EditNumber.component'

// types
import { CheckoutFormTypes, CheckoutModalProps } from './CheckoutModal.types'
import { AddressItem, PhoneNumberItem } from 'store/checkout/types'

export const CheckoutModal: FC<CheckoutModalProps> = ({
    isModal,
    setFormType,
    setAddressId,
    setPhoneId,
    formType,
    addressId,
    phoneId
}) => {
    const addressToEdit: AddressItem | undefined = useSelector(getDeliveryAddress(addressId))
    const numberToEdit: PhoneNumberItem | undefined = useSelector(getPhoneNumber(phoneId))

    const checkoutModalNode = document.getElementById('checkout-modal') as HTMLDivElement

    const closeModal = () => {
        setFormType('')
    }

    const closeEditAddressForm = () => {
        setFormType('')
        setAddressId('')
    }

    const closeEditNumberForm = () => {
        setFormType('')
        setPhoneId('')
    }

    if (!isModal) return null

    return ReactDOM.createPortal(
        <ModalBackground>
            <ModalContent>
                <CloseButton onClick={closeModal}>
                    <CloseIcon />
                </CloseButton>
                {formType === CheckoutFormTypes.ADD_ADDRESS && <AddAddress closeModal={closeModal} />}
                {formType === CheckoutFormTypes.EDIT_ADDRESS && addressToEdit && (
                    <EditAddress
                        closeModal={closeEditAddressForm}
                        dataToEdit={addressToEdit}
                    />
                )}
                {formType === CheckoutFormTypes.ADD_NUMBER && <AddNumber closeModal={closeModal} />}
                {formType === CheckoutFormTypes.EDIT_NUMBER && numberToEdit && (
                    <EditNumber
                        closeModal={closeEditNumberForm}
                        dataToEdit={numberToEdit}
                    />
                )}
            </ModalContent>
        </ModalBackground>,
        checkoutModalNode
    )
}