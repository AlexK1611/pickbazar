import { FC, useState, useEffect, useCallback } from 'react'
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
    const formTypeHandler = useCallback(
        (type: AuthFormTypes) => () => setFormType(type),
        []
    )

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
                    <SignUp formTypeHandler={formTypeHandler} />
                )}
                {formType === AuthFormTypes.LOGIN && (
                    <SignIn formTypeHandler={formTypeHandler} />
                )}
            </ModalContent>
        </ModalBackground>,
        authModalNode
    )
}