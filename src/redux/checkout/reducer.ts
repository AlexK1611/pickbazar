import { deliverySchedules } from './helpers'
import { CheckoutState } from './types'

const initialState: CheckoutState = {
    schedules: deliverySchedules
}

export const CheckoutReducer = (state = initialState): CheckoutState => {
    return state
}