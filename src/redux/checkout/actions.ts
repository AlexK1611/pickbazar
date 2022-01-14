import { Dispatch } from 'redux'
import { AddressPayload, AddressItem, CheckoutActionTypes } from './types'
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