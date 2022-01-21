import { createSelector } from 'reselect'
import { RootReducer } from '../rootReducer'

export const getCreatedOrder = createSelector(
    (state: RootReducer) => state.orders,
    state => state.createdOrder
)

export const getCreatedOrderTotal = createSelector(
    (state: RootReducer) => state.orders,
    state => state.createdOrder?.products.map(item => item.price).reduce((total, current) => total + current, 0)
)