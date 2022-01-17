import { Dispatch } from 'redux'
import {
    AddressPayload,
    AddressItem,
    CheckoutActionTypes,
    PhoneNumberItem
} from './types'
import { RootReducer } from 'redux/rootReducer'

export const addAddress = (data: AddressPayload) => {
    return (dispatch: Dispatch, getState: () => RootReducer) => {
        const payload = { ...data, id: data.title.toLowerCase() }
        
        const addresses = getState().checkout.addresses
        if (!addresses.find(address => address.id === payload.id)) {
            dispatch({ type: CheckoutActionTypes.ADD_ADDRESS, payload })
        }

        const storagedAddresses: AddressItem[] = JSON.parse(localStorage.getItem('addresses') || '[]')
        if (!storagedAddresses.find(address => address.id === payload.id)) {
            const updatedAddresses = [...storagedAddresses, payload]
            localStorage.setItem('addresses', JSON.stringify(updatedAddresses))
        }
    }
}

export const editAddress = (data: AddressItem) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: CheckoutActionTypes.EDIT_ADDRESS, payload: data })

        const storagedAddresses: AddressItem[] = JSON.parse(localStorage.getItem('addresses') || '[]')
        const updatedAddresses = storagedAddresses.map(address => {
            if (address.id === data.id) {
                return { ...address, title: data.title, description: data.description }
            }
            return address
        })
        localStorage.setItem('addresses', JSON.stringify(updatedAddresses))
    }
}

export const removeAddress = (id: string) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: CheckoutActionTypes.REMOVE_ADDRESS, payload: id })

        const storagedAddresses: AddressItem[] = JSON.parse(localStorage.getItem('addresses') || '[]')
        const updatedAddresses = storagedAddresses.filter(address => address.id !== id)
        localStorage.setItem('addresses', JSON.stringify(updatedAddresses))
    }
}

export const addPhoneNumber = (data: PhoneNumberItem) => {
    return (dispatch: Dispatch, getState: () => RootReducer) => {
        const phones = getState().checkout.phones
        if (!phones.find(phone => phone.number === data.number)) {
            dispatch({ type: CheckoutActionTypes.ADD_PHONE_NUMBER, payload: data })
        }

        const storagedPhones: PhoneNumberItem[] = JSON.parse(localStorage.getItem('phones') || '[]')
        if (!storagedPhones.find(phone => phone.number === data.number)) {
            const updatedPhones = [...storagedPhones, data]
            localStorage.setItem('phones', JSON.stringify(updatedPhones))
        }
    }
}

export const editPhoneNumber = (data: PhoneNumberItem) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: CheckoutActionTypes.EDIT_PHONE_NUMBER, payload: data })

        const storagedPhones: PhoneNumberItem[] = JSON.parse(localStorage.getItem('phones') || '[]')
        const updatedPhones = storagedPhones.map(phone => {
            if (phone.number === data.number) {
                return { ...phone, title: data.title, number: data.number }
            }
            return phone
        })
        localStorage.setItem('phones', JSON.stringify(updatedPhones))
    }
}

export const removePhoneNumber = (phoneNumber: string) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: CheckoutActionTypes.REMOVE_PHONE_NUMBER, payload: phoneNumber })

        const storagedPhones: PhoneNumberItem[] = JSON.parse(localStorage.getItem('phones') || '[]')
        const updatedPhones = storagedPhones.filter(phone => phone.number !== phoneNumber)
        localStorage.setItem('phones', JSON.stringify(updatedPhones))
    }
}