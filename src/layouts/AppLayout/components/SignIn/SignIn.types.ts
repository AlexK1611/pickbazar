import { Dispatch, SetStateAction } from 'react'
import { AuthFormTypes } from '../AuthModal/AuthModal.types'

export interface SignInProps {
    setFormType: Dispatch<SetStateAction<AuthFormTypes>>
}