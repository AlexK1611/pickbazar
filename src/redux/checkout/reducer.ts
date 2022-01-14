import { deliverySchedules, paymentOptions } from './helpers'
import { CheckoutAction, CheckoutActionTypes, CheckoutState } from './types'

const initialState: CheckoutState = {
    addresses: JSON.parse(localStorage.getItem('addresses') || '[]'),
    schedules: deliverySchedules,
    phones: JSON.parse(localStorage.getItem('phones') || '[]'),
    payments: paymentOptions
}

export const CheckoutReducer = (state = initialState, action: CheckoutAction): CheckoutState => {
    switch (action.type) {
        case CheckoutActionTypes.ADD_ADDRESS: {
            return { ...state, addresses: [...state.addresses, action.payload] }
        }
        case CheckoutActionTypes.ADD_PHONE_NUMBER: {
            return { ...state, phones: [...state.phones, action.payload] }
        }
        default: {
            return state
        }
    }
}