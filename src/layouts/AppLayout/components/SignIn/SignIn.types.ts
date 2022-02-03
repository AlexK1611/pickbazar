import { AuthFormTypes } from '../AuthModal/AuthModal.types'

export interface SignInProps {
    formTypeHandler: (formType: AuthFormTypes) => () => void
}