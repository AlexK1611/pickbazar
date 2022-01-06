import { createSelector } from 'reselect'
import { RootReducer } from '../rootReducer'

export const getProductsSelector = createSelector(
    (state: RootReducer) => state.products,
    state => state.products
)