import { AuthFormTypes } from '../AuthModal/AuthModal.types'

export interface SignUpProps {
    formTypeHandler: (formType: AuthFormTypes) => () => void
}