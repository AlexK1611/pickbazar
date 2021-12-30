export interface SignUpData {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface SignInData {
    identifier: string,
    password: string
}

interface UserItem {
    id: number,
    username: string,
    email: string,
    provider: string,
    confirmed: boolean,
    blocked: null,
    role: {
        id: number,
        name: string,
        description: string,
        type: string,
        created_by: null,
        updated_by: null
    },
    created_by: null,
    updated_by: null,
    created_at: string,
    updated_at: string
}

export interface AuthResponse {
    jwt: string,
    user: UserItem
}

export interface AuthState {
    authMessage: string | null,
    jwt: string | null,
    user: UserItem | null
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
    payload: UserItem
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