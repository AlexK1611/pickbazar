import { AuthState, AuthAction, AuthActionTypes } from './types'

const initialState: AuthState = {
    user: {}
}

export const AuthReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.REGISTER: {
            return { ...state, user: action.payload }
        }
        default: {
            return state
        }
    }
}