import { createSelector } from 'reselect'
import { RootReducer } from '../rootReducer'

export const getCategories = createSelector(
    (state: RootReducer) => state.categories,
    state => state.categories
)