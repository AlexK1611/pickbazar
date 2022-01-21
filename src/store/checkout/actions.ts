import { Dispatch } from 'redux'
import {
    AddressPayload,
    AddressItem,
    CheckoutActionTypes,
    PhoneNumberItem
} from './types'
import { RootReducer } from 'store/rootReducer'

export const addAddress = (data: AddressPayload) => {
    return (dispatch: Dispatch, getState: () => RootReducer) => {
        const payload = { ...data, id: data.title.toLowerCase() }
        const addresses = getState().checkout.addresses

        if (!addresses.find(address => address.id === payload.id)) {
            dispatch({
                type: CheckoutActionTypes.ADD_ADDRESS,
                payload
            })
        }
    }
}

export const editAddress = (data: AddressItem) => ({
    type: CheckoutActionTypes.EDIT_ADDRESS,
    payload: data
})

export const removeAddress = (id: string) => ({
    type: CheckoutActionTypes.REMOVE_ADDRESS,
    payload: id
}) 

export const addPhoneNumber = (data: PhoneNumberItem) => {
    return (dispatch: Dispatch, getState: () => RootReducer) => {
        const phones = getState().checkout.phones
        if (!phones.find(phone => phone.number === data.number)) {
            dispatch({
                type: CheckoutActionTypes.ADD_PHONE_NUMBER,
                payload: data
            })
        }
    }
}

export const editPhoneNumber = (data: PhoneNumberItem) => ({
    type: CheckoutActionTypes.EDIT_PHONE_NUMBER,
    payload: data
})

export const removePhoneNumber = (phoneNumber: string) => ({
    type: CheckoutActionTypes.REMOVE_PHONE_NUMBER,
    payload: phoneNumber
})