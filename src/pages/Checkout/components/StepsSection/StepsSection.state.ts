import {
    OrderCreationAction,
    OrderCreationState,
    OrderCreationTypes
} from './StepsSection.types'

export const orderCreationState: OrderCreationState = {
    address: null,
    schedule: null,
    number: null,
    payment: null
}

export const orderCreationReducer = (
    state: OrderCreationState,
    action: OrderCreationAction
): OrderCreationState => {
    switch (action.type) {
        case OrderCreationTypes.SET_ORDER_ADDRESS: {
            return {
                ...state,
                address: { id: action.payload.id, description: action.payload.description }
            }
        }
        case OrderCreationTypes.SET_ORDER_SCHEDULE: {
            return {
                ...state, 
                schedule: { id: action.payload.id, description: action.payload.description }
            }
        }
        case OrderCreationTypes.SET_ORDER_PHONE_NUMBER: {
            return { ...state, number: action.payload }
        }
        case OrderCreationTypes.SET_ORDER_PAYMENT: {
            return {
                ...state,
                payment: { id: action.payload.id, name: action.payload.name }
            }
        }
        default: {
            return state
        }
    }
}