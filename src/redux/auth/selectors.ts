import { createSelector } from 'reselect'
import { RootReducer } from '../rootReducer'

export const getUserSelector = createSelector(
    (state: RootReducer) => state.auth,
    state => state.user
)

export const getAuthMessageSelector = createSelector(
    (state: RootReducer) => state.auth,
    state => state.authMessage
)