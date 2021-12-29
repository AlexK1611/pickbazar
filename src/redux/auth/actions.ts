import { Dispatch } from 'redux'
import { axiosInstance } from '../../config/api'
import { AuthActionTypes } from './types'

export const signUpRequest = (data: { [key: string]: string }) => {
    return async (dispatch: Dispatch) => {
        const { confirmPassword, ...endData } = data
        const response = await axiosInstance.post('/auth/local/register', endData)
        if (response.status === 200) {
            dispatch({
                type: AuthActionTypes.SET_JWT,
                payload: response.data.jwt
            })
            localStorage.setItem('jwt', JSON.stringify(response.data.jwt))

            dispatch({
                type: AuthActionTypes.SET_USER,
                payload: response.data.user
            })
            localStorage.setItem('user', JSON.stringify(response.data.user))

            dispatch({
                type: AuthActionTypes.SET_AUTH_MESSAGE,
                payload: 'Signed up successfully'
            })
        }
    }
}

export const removeAuthMessage = () => ({
    type: AuthActionTypes.REMOVE_AUTH_MESSAGE
})

export const signInRequest = (data: { [key: string]: string }) => {
    return async (dispatch: Dispatch) => {
        const response = await axiosInstance.post('/auth/local', data)
        if (response.status === 200) {
            dispatch({
                type: AuthActionTypes.SET_JWT,
                payload: response.data.jwt
            })
            localStorage.setItem('jwt', JSON.stringify(response.data.jwt))

            dispatch({
                type: AuthActionTypes.SET_USER,
                payload: response.data.user
            })
            localStorage.setItem('user', JSON.stringify(response.data.user))

            dispatch({
                type: AuthActionTypes.SET_AUTH_MESSAGE,
                payload: 'Signed in successfully'
            })
        }
    }
}

export const signOutRequest = () => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: AuthActionTypes.REMOVE_JWT })
        localStorage.removeItem('jwt')

        dispatch({ type: AuthActionTypes.REMOVE_USER })
        localStorage.removeItem('user')
    }
}