export interface AuthState {
    user: object
}

export enum AuthActionTypes {
    REGISTER = 'REGISTER'
}

interface RegisterUserAction {
    type: AuthActionTypes.REGISTER,
    payload: object
}

export type AuthAction = RegisterUserAction