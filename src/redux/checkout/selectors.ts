import { createSelector } from 'reselect'
import { RootReducer } from '../rootReducer'

export const getDeliveryAddressesSelector = createSelector(
    (state: RootReducer) => state.checkout,
    state => state.addresses
)

export const getDeliverySchedulesSelector = createSelector(
    (state: RootReducer) => state.checkout,
    state => state.schedules
)

export const getPhoneNumbersSelector = createSelector(
    (state: RootReducer) => state.checkout,
    state => state.phones
)

export const getPaymentOptionsSelector = createSelector(
    (state: RootReducer) => state.checkout,
    state => state.payments
)