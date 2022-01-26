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
import { AuthFormTypes, AuthModalProps } from './AuthModal.types'

export const AuthModal: FC<AuthModalProps> = ({ isModal, authModalHandler }) => {
    const [formType, setFormType] = useState(AuthFormTypes.REGISTER)

    useEffect(() => {
        return () => setFormType(AuthFormTypes.REGISTER)
    }, [])

    const authModalNode = document.getElementById('auth-modal') as HTMLDivElement

    if (!isModal) return null

    return ReactDOM.createPortal(
        <ModalBackground>
            <ModalContent>
                <CloseButton onClick={authModalHandler}>
                    <CloseIcon />
                </CloseButton>
                {formType === AuthFormTypes.REGISTER && (
                    <SignUp setFormType={setFormType} />
                )}
                {formType === AuthFormTypes.LOGIN && (
                    <SignIn setFormType={setFormType} />
                )}
            </ModalContent>
        </ModalBackground>,
        authModalNode
    )
}