import { FC } from 'react'
import ReactDOM from 'react-dom'
import {
    ModalBackground,
    ModalContent,
    CloseButton,
    CloseIcon
} from './CheckoutModal.styles'
import { CheckoutModalProps } from './CheckoutModal.types'
import { AddAddress } from '../AddAddress/AddAddress.component'
import { AddNumber } from '../AddNumber/AddNumber.component'

export const CheckoutModal: FC<CheckoutModalProps> = ({
    isModal,
    closeModal,
    formType
}) => {
    const portalNode = document.getElementById('portal')!

    if (!isModal) return null

    return ReactDOM.createPortal(
        <ModalBackground>
            <ModalContent>
                <CloseButton onClick={closeModal}>
                    <CloseIcon />
                </CloseButton>
                {formType === 'add-address' && <AddAddress />}
                {formType === 'add-number' && <AddNumber />}
            </ModalContent>
        </ModalBackground>,
        portalNode
    )
}