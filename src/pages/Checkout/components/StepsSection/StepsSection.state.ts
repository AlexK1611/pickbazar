import {
    OrderCreationAction,
    OrderCreationState,
    OrderCreationTypes
} from './StepsSection.types'

export const orderCreationState: OrderCreationState = {
    addressId: null,
    scheduleId: null,
    numberId: null,
    paymentId: null
}

export const orderCreationReducer = (
    state: OrderCreationState,
    action: OrderCreationAction
): OrderCreationState => {
    switch (action.type) {
        case OrderCreationTypes.SET_ADDRESS_ID: {
            return { ...state, addressId: action.payload }
        }
        case OrderCreationTypes.SET_SCHEDULE_ID: {
            return { ...state, scheduleId: action.payload }
        }
        case OrderCreationTypes.SET_PHONE_NUMBER_ID: {
            return { ...state, numberId: action.payload }
        }
        case OrderCreationTypes.SET_PAYMENT_ID: {
            return { ...state, paymentId: action.payload }
        }
        default: {
            return state
        }
    }
}