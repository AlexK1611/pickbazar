import { Dispatch } from 'redux'
import { axiosInstance } from 'config/api'
import { CouponsActionTypes, CouponsResponse } from './types'

export const couponsRequest = () => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await axiosInstance.get<CouponsResponse>('/coupons')
            dispatch({ type: CouponsActionTypes.SET_COUPONS, payload: data })
        } catch (error) {
            console.log(error)
        }
    }
}