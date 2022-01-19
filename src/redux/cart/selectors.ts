import { createSelector } from 'reselect'
import { RootReducer } from '../rootReducer'

export const getCartItems = createSelector(
    (state: RootReducer) => state.cart,
    state => state.cart
)

export const getCartItemTypes = createSelector(
    (state: RootReducer) => state.cart,
    state => state.cart.length
)

export const getCartTotal = createSelector(
    (state: RootReducer) => state.cart,
    state => {
        if (state.cart.length === 0) return 0
        return state.cart.map(item => item.quantity * item.price).reduce((total, current) => total + current, 0)
    }
)