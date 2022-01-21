import { FC, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
    ModalBackground,
    ModalContent,
    CloseButton,
    CloseIcon
} from './AuthModal.styles'
import { SignIn } from '../SignIn/SignIn.component'
import { SignUp } from '../SignUp/SignUp.component'
import { AuthModalProps } from './AuthModal.types'

export const AuthModal: FC<AuthModalProps> = ({ isModal, handleAuthModal }) => {
    const [formType, setFormType] = useState('register')

    useEffect(() => {
        return () => setFormType('register')
    }, [])

    const authModalNode = document.getElementById('auth-modal') as HTMLDivElement

    if (!isModal) return null

    return ReactDOM.createPortal(
        <ModalBackground>
            <ModalContent>
                <CloseButton onClick={() => handleAuthModal(false)}>
                    <CloseIcon />
                </CloseButton>
                {formType === 'register' && (
                    <SignUp setFormType={setFormType} />
                )}
                {formType === 'login' && (
                    <SignIn setFormType={setFormType} />
                )}
            </ModalContent>
        </ModalBackground>,
        authModalNode
    )
}