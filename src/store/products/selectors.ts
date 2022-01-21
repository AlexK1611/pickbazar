import { createSelector } from 'reselect'
import { RootReducer } from '../rootReducer'

export const getProducts = createSelector(
    (state: RootReducer) => state.products,
    state => state.products
)

export const getProductInfo = createSelector(
    (state: RootReducer) => state.products,
    state => state.productInfo
)

export const getProductsRequestStart = createSelector(
    (state: RootReducer) => state.products,
    state => state.requestStart
)