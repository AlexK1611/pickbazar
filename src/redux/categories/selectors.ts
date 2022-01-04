import { createSelector } from 'reselect'
import { RootReducer } from '../rootReducer'

export const getCategoriesSelector = createSelector(
    (state: RootReducer) => state.categories,
    state => state.categories
)