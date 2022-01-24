import { Dispatch } from 'redux'
import { axiosInstance } from 'config/api'
import { CreatedOrderResponse, CreateOrderPayload, OrdersActionTypes } from './types'
import { RootReducer } from 'store/rootReducer'

export const createOrderRequest = (order: CreateOrderPayload) => {
    return async (dispatch: Dispatch, getState: () => RootReducer) => {
        try {
            const { data } = await axiosInstance.post<CreatedOrderResponse>('/orders', {
                address: getState().checkout.addresses.find(address => address.id === order.addressId)?.description,
                when: new Date().toLocaleTimeString(),
                products: getState().products.products?.map(product => product.id),
                phone: getState().checkout.phones.find(phone => phone.id === order.numberId)?.number,
                email: getState().auth.user?.email
            })
            dispatch({
                type: OrdersActionTypes.SET_CREATED_ORDER,
                payload: {
                    ...data,
                    schedule: getState().checkout.schedules.find(schedule => schedule.id === order.scheduleId)?.description,
                    payment: getState().checkout.payments.find(payment => payment.id === order.paymentId)?.description
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}