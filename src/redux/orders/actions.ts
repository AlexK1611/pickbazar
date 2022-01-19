import { Dispatch } from 'redux'
import { axiosInstance } from 'config/api'
import { CreatedOrderResponse, CreateOrderPayload, OrdersActionTypes } from './types'
import { RootReducer } from 'redux/rootReducer'

export const createOrderRequest = (order: CreateOrderPayload) => {
    return async (dispatch: Dispatch, getState: () => RootReducer) => {
        try {
            const { data } = await axiosInstance.post<CreatedOrderResponse>('/orders', {
                address: order.address,
                when: new Date().toLocaleTimeString(),
                products: getState().products.products?.map(product => product.id),
                phone: order.number,
                email: getState().auth.user?.email
            })
            dispatch({
                type: OrdersActionTypes.SET_CREATED_ORDER,
                payload: {
                    ...data,
                    schedule: order.schedule,
                    payment: order.payment
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}