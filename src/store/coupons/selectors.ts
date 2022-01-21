import { createSelector } from 'reselect'
import { RootReducer } from '../rootReducer'

export const getCoupons = createSelector(
    (state: RootReducer) => state.coupons,
    state => state.coupons
)