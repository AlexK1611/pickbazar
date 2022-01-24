import { createSelector } from 'reselect'
import { RootReducer } from '../rootReducer'

export const getDeliveryAddresses = createSelector(
    (state: RootReducer) => state.checkout,
    state => state.addresses
)

export const getDeliveryAddress = (id?: string) => {
    return createSelector(
        (state: RootReducer) => state.checkout.addresses,
        addresses => addresses.find(address => address.id === id)
    )
}

export const getDeliverySchedules = createSelector(
    (state: RootReducer) => state.checkout,
    state => state.schedules
)

export const getPhoneNumbers = createSelector(
    (state: RootReducer) => state.checkout,
    state => state.phones
)

export const getPhoneNumber = (id?: string) => {
    return createSelector(
        (state: RootReducer) => state.checkout.phones,
        phones => phones.find(phone => phone.id === id)
    )
}

export const getPaymentOptions = createSelector(
    (state: RootReducer) => state.checkout,
    state => state.payments
)