export enum AuthFormTypes {
    LOGIN = 'login',
    REGISTER = 'register'
}

export interface AuthModalProps {
    isModal: boolean,
    handleAuthModal: (param: boolean) => void
}