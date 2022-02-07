import axios from 'axios'
import { AuthActionTypes } from 'store/auth/types'
import { store } from 'store/store'

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_HOST,
    timeout: 1000
})

export const interceptor = (store: any) => {
    axiosInstance.interceptors.response.use(
        response => response,
        error => {
            /*
                экшн для сообщения об успешной авторизации/аутентификации (сокращенно)
            */
            store.dispatch({
                type: AuthActionTypes.SET_TOAST_MESSAGE,
                payload: error.response.data.message[0].messages[0].message
            })
            return Promise.reject(error)
        }
    )
}
interceptor(store)