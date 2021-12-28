import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
    ModalBackground,
    ModalContent,
    CloseButton,
} from './styled'
import { SignInForm } from '../SignInForm'
import { SignUpForm } from '../SignUpForm'
import { AuthModalProps } from './types'
import { ReactComponent as CloseIcon } from '../../../../assets/icons/close.svg'

export const AuthModal = ({ isModal, closeModal }: AuthModalProps) => {
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
                    <SignUpForm switchToLogin={() => setFormType('login')} />
                )}
                {formType === 'login' && (
                    <SignInForm switchToRegister={() => setFormType('register')} />
                )}
            </ModalContent>
        </ModalBackground>,
        portalNode
    )
}