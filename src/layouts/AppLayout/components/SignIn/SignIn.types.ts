import { AuthFormTypes } from '../AuthModal/AuthModal.types'

export interface SignInProps {
    formTypeHandler: (arg: AuthFormTypes) => () => void
}