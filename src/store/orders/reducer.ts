import { OrdersAction, OrdersActionTypes, OrdersState } from './types'

const initialState: OrdersState = {
    createdOrder: null
}

export const OrdersReducer = (state = initialState, action: OrdersAction): OrdersState => {
    switch (action.type) {
        case OrdersActionTypes.SET_CREATED_ORDER: {
            return { ...state, createdOrder: action.payload }
        }
        default: {
            return state
        }
    }
}