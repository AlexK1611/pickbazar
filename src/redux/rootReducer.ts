import { combineReducers } from 'redux'
import { AuthReducer } from './auth/reducer'
import { CartReducer } from './cart/reducer'
import { CategoriesReducer } from './categories/reducer'
import { CheckoutReducer } from './checkout/reducer'
import { CouponsReducer } from './coupons/reducer'
import { ProductsReducer } from './products/reducer'

export const rootReducer = combineReducers({
    auth: AuthReducer,
    coupons: CouponsReducer,
    categories: CategoriesReducer,
    products: ProductsReducer,
    cart: CartReducer,
    checkout: CheckoutReducer
})

export type RootReducer = ReturnType<typeof rootReducer>