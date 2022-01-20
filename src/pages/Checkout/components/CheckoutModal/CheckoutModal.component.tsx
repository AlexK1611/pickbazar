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
    closeModal,
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
    // TODO: та я смотрю ты прям автоматную очередь себе запульнул)
    const portalNode = document.getElementById('portal') as HTMLDivElement

    if (!isModal) return null

    return ReactDOM.createPortal(
        <ModalBackground>
            <ModalContent>
                <CloseButton onClick={closeModal}>
                    <CloseIcon />
                </CloseButton>
                {formType === 'add-address' && <AddAddress closeModal={closeModal} />}
                {formType === 'edit-address' && addressToEdit && (
                    <EditAddress
                        closeModal={closeModal}
                        dataToEdit={addressToEdit}
                    />
                )}
                {formType === 'add-number' && <AddNumber closeModal={closeModal} />}
                {formType === 'edit-number' && numberToEdit && (
                    <EditNumber
                        closeModal={closeModal}
                        dataToEdit={numberToEdit}
                    />
                )}
            </ModalContent>
        </ModalBackground>,
        portalNode
    )
}