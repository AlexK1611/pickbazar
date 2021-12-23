import React, { useState, useEffect } from 'react'
import { Modal } from '../../../../components/Modal'
import { SignUpForm } from '../SignUpForm'
import { AuthModalProps } from './types'

export const AuthModal = ({ isModal, closeModal }: AuthModalProps) => {
    const [formType, setFormType] = useState('register')

    useEffect(() => {
        return () => setFormType('register')
    }, [])

    return (
        <Modal isModal={isModal} closeModal={closeModal}>
            {formType === 'register' && (
                <SignUpForm switchToLogin={() => setFormType('login')}/>
            )}
        </Modal>
    )
}