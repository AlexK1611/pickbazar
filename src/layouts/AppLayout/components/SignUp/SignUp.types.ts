import { AuthFormTypes } from '../AuthModal/AuthModal.types'

export interface SignUpProps {
    formTypeHandler: (arg: AuthFormTypes) => () => void
}