import { deliverySchedules, paymentOptions } from './helpers'
import { CheckoutAction, CheckoutActionTypes, CheckoutState } from './types'

const initialState: CheckoutState = {
    addresses: [],
    schedules: deliverySchedules,
    phones: [],
    payments: paymentOptions
}

export const CheckoutReducer = (state = initialState, action: CheckoutAction): CheckoutState => {
    switch (action.type) {
        case CheckoutActionTypes.ADD_ADDRESS: {
            return {
                ...state,
                addresses: [...state.addresses, action.payload]
            }
        }
        case CheckoutActionTypes.EDIT_ADDRESS: {
            return {
                ...state,
                addresses: state.addresses.map(address => {
                    if (address.id === action.payload.id) {
                        return {
                            ...address,
                            title: action.payload.title,
                            description: action.payload.description
                        }
                    }
                    return address
                })
            }
        }
        case CheckoutActionTypes.REMOVE_ADDRESS: {
            return {
                ...state,
                addresses: state.addresses.filter(address => address.id !== action.payload)
            }
        }
        case CheckoutActionTypes.ADD_PHONE_NUMBER: {
            return {
                ...state,
                phones: [...state.phones, action.payload]
            }
        }
        case CheckoutActionTypes.EDIT_PHONE_NUMBER: {
            return {
                ...state,
                phones: state.phones.map(phone => {
                    if (phone.id === action.payload.id) {
                        return {
                            ...phone,
                            title: action.payload.title,
                            number: action.payload.number
                        }
                    }
                    return phone
                })
            }
        }
        case CheckoutActionTypes.REMOVE_PHONE_NUMBER: {
            return {
                ...state,
                phones: state.phones.filter(phone => phone.id !== action.payload)
            }
        }
        default: {
            return state
        }
    }
}