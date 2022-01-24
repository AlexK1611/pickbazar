import { Dispatch } from 'redux'
import { v4 as uuidv4 } from 'uuid'
import {
    AddressPayload,
    AddressItem,
    CheckoutActionTypes,
    PhoneNumberPayload,
    PhoneNumberItem
} from './types'

export const addAddress = (data: AddressPayload) => {
    return (dispatch: Dispatch) => {
        const payload = { ...data, id: uuidv4() }
        dispatch({
            type: CheckoutActionTypes.ADD_ADDRESS,
            payload
        })
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

export const addPhoneNumber = (data: PhoneNumberPayload) => {
    return (dispatch: Dispatch) => {
        const payload = { ...data, id: uuidv4() }
        dispatch({
            type: CheckoutActionTypes.ADD_PHONE_NUMBER,
            payload
        })
    }
}

export const editPhoneNumber = (data: PhoneNumberItem) => ({
    type: CheckoutActionTypes.EDIT_PHONE_NUMBER,
    payload: data
})

export const removePhoneNumber = (id: string) => ({
    type: CheckoutActionTypes.REMOVE_PHONE_NUMBER,
    payload: id
})