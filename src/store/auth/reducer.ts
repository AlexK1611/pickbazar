import { AuthState, AuthAction, AuthActionTypes } from './types'

const initialState: AuthState = {
    authMessage: null,
    jwt: null,
    user: null
}

export const AuthReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_TOAST_MESSAGE: {
            return { ...state, authMessage: action.payload}
        }
        case AuthActionTypes.REMOVE_AUTH_MESSAGE: {
            return { ...state, authMessage: null }
        }
        case AuthActionTypes.SET_JWT: {
            return { ...state, jwt: action.payload }
        }
        case AuthActionTypes.REMOVE_JWT: {
            return { ...state, jwt: null }
        }
        case AuthActionTypes.SET_USER: {
            return { ...state, user: action.payload }
        }
        case AuthActionTypes.REMOVE_USER: {
            return { ...state, user: null }
        }
        default: {
            return state
        }
    }
}