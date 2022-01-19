import { createSelector } from 'reselect'
import { RootReducer } from '../rootReducer'

export const getUser = createSelector(
    (state: RootReducer) => state.auth,
    state => state.user
)

export const getAuthMessage = createSelector(
    (state: RootReducer) => state.auth,
    state => state.authMessage
)