import { Dispatch } from 'redux'
import { axiosInstance } from '../../config/api'
import { CouponsActionTypes } from './types'

export const couponsRequest = () => {
    return async (dispatch: Dispatch) => {
        const response = await axiosInstance.get('/coupons')
        if (response.status === 200) {
            dispatch({
                type: CouponsActionTypes.SET_COUPONS,
                payload: response.data
            })
        }
    }
}