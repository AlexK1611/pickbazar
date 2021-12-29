import { combineReducers } from 'redux'
import { AuthReducer } from './auth/reducer'
import { CouponsReducer } from './coupons/reducer'

export const rootReducer = combineReducers({
    auth: AuthReducer,
    coupons: CouponsReducer
})

export type RootReducer = ReturnType<typeof rootReducer>