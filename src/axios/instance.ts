import axios from 'axios'
import { AuthActionTypes } from '../redux/auth/types'

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_HOST,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const interceptor = (store: any) => {
    axiosInstance.interceptors.response.use(
        response => response,
        error => {
            store.dispatch({
                type: AuthActionTypes.SET_AUTH_MESSAGE,
                payload: 'Something went wrong'
            })
            return Promise.reject(error)
        }
    )
}