export interface AuthState {
    authMessage: string | null,
    jwt: string | null,
    user: object | null
}

export enum AuthActionTypes {
    SET_AUTH_MESSAGE = 'SET_AUTH_MESSAGE',
    REMOVE_AUTH_MESSAGE = 'REMOVE_AUTH_MESSAGE',
    SET_JWT = 'SET_JWT',
    REMOVE_JWT = 'REMOVE_JWT',
    SET_USER = 'SET_USER',
    REMOVE_USER = 'REMOVE_USER'
}

interface SetAuthMessageAction {
    type: AuthActionTypes.SET_AUTH_MESSAGE,
    payload: string
}

interface RemoveAuthMessageAction {
    type: AuthActionTypes.REMOVE_AUTH_MESSAGE
}

interface SetJwtAction {
    type: AuthActionTypes.SET_JWT,
    payload: string
}

interface RemoveJwtAction {
    type: AuthActionTypes.REMOVE_JWT
}

interface SetUserAction {
    type: AuthActionTypes.SET_USER,
    payload: object
}

interface RemoveUserAction {
    type: AuthActionTypes.REMOVE_USER
}

export type AuthAction = (
    SetAuthMessageAction |
    RemoveAuthMessageAction |
    SetJwtAction |
    RemoveJwtAction |
    SetUserAction |
    RemoveUserAction
)