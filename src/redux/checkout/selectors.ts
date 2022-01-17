import { createSelector } from 'reselect'
import { RootReducer } from '../rootReducer'

export const getDeliveryAddressesSelector = createSelector(
    (state: RootReducer) => state.checkout,
    state => state.addresses
)

export const getDeliveryAddress = (id?: string) => {
    return createSelector(
        (state: RootReducer) => state.checkout.addresses,
        addresses => addresses.find(address => address.id === id)
    )
}

export const getDeliverySchedulesSelector = createSelector(
    (state: RootReducer) => state.checkout,
    state => state.schedules
)

export const getPhoneNumbersSelector = createSelector(
    (state: RootReducer) => state.checkout,
    state => state.phones
)

export const getPhoneNumber = (phoneNumber?: string) => {
    return createSelector(
        (state: RootReducer) => state.checkout.phones,
        phones => phones.find(phone => phone.number === phoneNumber)
    )
}

export const getPaymentOptionsSelector = createSelector(
    (state: RootReducer) => state.checkout,
    state => state.payments
)