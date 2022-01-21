import { FC } from 'react'
import ReactDOM from 'react-dom'

// redux
import { useSelector } from 'react-redux'
import { RootReducer } from 'redux/rootReducer'
import { getDeliveryAddress, getPhoneNumber } from 'redux/checkout/selectors'

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
import { CheckoutModalProps } from './CheckoutModal.types'
import { AddressItem, PhoneNumberItem } from 'redux/checkout/types'

export const CheckoutModal: FC<CheckoutModalProps> = ({
    isModal,
    setFormType,
    setAddressId,
    setPhoneNumber,
    formType,
    addressId,
    phoneNumber
}) => {
    const addressToEdit: AddressItem | undefined = useSelector(
        (state: RootReducer) => getDeliveryAddress(addressId)(state)
    )
    const numberToEdit: PhoneNumberItem | undefined = useSelector(
        (state: RootReducer) => getPhoneNumber(phoneNumber)(state)
    )

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
        setPhoneNumber('')
    }

    if (!isModal) return null

    return ReactDOM.createPortal(
        <ModalBackground>
            <ModalContent>
                <CloseButton onClick={() => closeModal()}>
                    <CloseIcon />
                </CloseButton>
                {formType === 'add-address' && <AddAddress closeModal={closeModal} />}
                {formType === 'edit-address' && addressToEdit && (
                    <EditAddress
                        closeModal={closeEditAddressForm}
                        dataToEdit={addressToEdit}
                    />
                )}
                {formType === 'add-number' && <AddNumber closeModal={closeModal} />}
                {formType === 'edit-number' && numberToEdit && (
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