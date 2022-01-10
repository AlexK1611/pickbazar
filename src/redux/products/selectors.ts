import { createSelector } from 'reselect'
import { RootReducer } from '../rootReducer'

export const getProductsSelector = createSelector(
    (state: RootReducer) => state.products,
    state => state.products
)

export const getProductInfoSelector = createSelector(
    (state: RootReducer) => state.products,
    state => state.productInfo
)