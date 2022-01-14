import { deliverySchedules, paymentOptions } from './helpers'
import { CheckoutState } from './types'

const initialState: CheckoutState = {
    schedules: deliverySchedules,
    payments: paymentOptions
}

export const CheckoutReducer = (state = initialState): CheckoutState => {
    return state
}