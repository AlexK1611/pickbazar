import { Dispatch } from 'redux'
import { axiosInstance } from 'config/api'
import { AuthActionTypes, AuthResponse, SignInData, SignUpData } from './types'

export const signUpRequest = (data: SignUpData) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data: { jwt, user } } = await axiosInstance.post<AuthResponse>('/auth/local/register', data)
            dispatch({
                type: AuthActionTypes.SET_JWT,
                payload: jwt
            })
            dispatch({
                type: AuthActionTypes.SET_USER,
                payload: user
            })
            dispatch({
                type: AuthActionTypes.SET_TOAST_MESSAGE,
                payload: 'Signed up successfully'
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const googleAuthRequest = (provider: string, token: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data: { jwt, user } } = await axiosInstance.get(`/auth/${provider}/callback${token}`)
            dispatch({
                type: AuthActionTypes.SET_JWT,
                payload:jwt
            })
            dispatch({
                type: AuthActionTypes.SET_USER, payload: user
            })
            dispatch({
                type: AuthActionTypes.SET_TOAST_MESSAGE,
                payload: 'Signed in successfully'
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const removeAuthMessage = () => ({
    type: AuthActionTypes.REMOVE_AUTH_MESSAGE
})

export const signInRequest = (data: SignInData) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data: { jwt, user } } = await axiosInstance.post<AuthResponse>('/auth/local', data)
            dispatch({
                type: AuthActionTypes.SET_JWT,
                payload: jwt
            })
            dispatch({
                type: AuthActionTypes.SET_USER,
                payload: user
            })
            dispatch({
                type: AuthActionTypes.SET_TOAST_MESSAGE,
                payload: 'Signed in successfully'
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const signOutRequest = () => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: AuthActionTypes.REMOVE_JWT
        })
        dispatch({
            type: AuthActionTypes.REMOVE_USER
        })
    }
}