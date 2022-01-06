import { combineReducers } from 'redux'
import { AuthReducer } from './auth/reducer'
import { CategoriesReducer } from './categories/reducer'
import { CouponsReducer } from './coupons/reducer'
import { ProductsReducer } from './products/reducer'

export const rootReducer = combineReducers({
    auth: AuthReducer,
    coupons: CouponsReducer,
    categories: CategoriesReducer,
    products: ProductsReducer
})

export type RootReducer = ReturnType<typeof rootReducer>