import React from 'react'
import ReactDOM from 'react-dom'
import { ModalBackground, ModalContent, CloseButton } from './styled'
import { ModalProps } from './types'
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'

export const Modal = ({ isModal, closeModal, children }: ModalProps) => {
    if (!isModal) return null

    const portalNode = document.getElementById('portal')!

    return ReactDOM.createPortal(
        <ModalBackground>
            <ModalContent>
                <CloseButton onClick={closeModal}>
                    <CloseIcon/>
                </CloseButton>
                {children}
            </ModalContent>
        </ModalBackground>,
        portalNode
    )
}