import { FC, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
    ModalBackground,
    ModalContent,
    CloseButton,
} from './AuthModal.styles'
import { SignIn } from '../SignIn/SignIn.component'
import { SignUp } from '../SignUp/SignUp.component'
import { AuthModalProps } from './AuthModal.types'
import { ReactComponent as CloseIcon } from '../../../../assets/icons/close.svg'

export const AuthModal: FC<AuthModalProps> = ({ isModal, closeModal }) => {
    const [formType, setFormType] = useState('register')

    useEffect(() => {
        return () => setFormType('register')
    }, [])

    const portalNode = document.getElementById('portal')!

    if (!isModal) return null

    return ReactDOM.createPortal(
        <ModalBackground>
            <ModalContent>
                <CloseButton onClick={closeModal}>
                    <CloseIcon />
                </CloseButton>
                {formType === 'register' && (
                    <SignUp switchToLogin={() => setFormType('login')} />
                )}
                {formType === 'login' && (
                    <SignIn switchToRegister={() => setFormType('register')} />
                )}
            </ModalContent>
        </ModalBackground>,
        portalNode
    )
}