import { createSelector } from 'reselect'
import { RootReducer } from '../rootReducer'

export const getDeliverySchedulesSelector = createSelector(
    (state: RootReducer) => state.checkout,
    state => state.schedules
)

export const getPaymentOptionsSelector = createSelector(
    (state: RootReducer) => state.checkout,
    state => state.payments
)