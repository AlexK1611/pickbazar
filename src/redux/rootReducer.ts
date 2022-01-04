import { combineReducers } from 'redux'
import { AuthReducer } from './auth/reducer'
import { CategoriesReducer } from './categories/reducer'
import { CouponsReducer } from './coupons/reducer'

export const rootReducer = combineReducers({
    auth: AuthReducer,
    coupons: CouponsReducer,
    categories: CategoriesReducer
})

export type RootReducer = ReturnType<typeof rootReducer>