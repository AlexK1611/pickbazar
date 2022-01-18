import { createSelector } from 'reselect'
import { RootReducer } from '../rootReducer'

export const getCreatedOrder = createSelector(
    (state: RootReducer) => state.orders,
    state => state.createdOrder
)