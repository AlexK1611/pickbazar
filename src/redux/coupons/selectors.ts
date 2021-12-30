import { createSelector } from 'reselect'
import { RootReducer } from '../rootReducer'

export const getCouponsSelector = createSelector(
    (state: RootReducer) => state.coupons,
    state => state.coupons
)