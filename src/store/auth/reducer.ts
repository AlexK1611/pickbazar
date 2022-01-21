import { AuthState, AuthAction, AuthActionTypes } from './types'

const initialState: AuthState = {
    authMessage: null,
    jwt: JSON.parse(localStorage.getItem('jwt') || 'null') || null,
    user: JSON.parse(localStorage.getItem('user') || 'null') || null
}

export const AuthReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH_MESSAGE: {
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