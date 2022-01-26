import { Dispatch, SetStateAction } from 'react'
import { AuthFormTypes } from '../AuthModal/AuthModal.types'

export interface SignUpProps {
    setFormType: Dispatch<SetStateAction<AuthFormTypes>>
}