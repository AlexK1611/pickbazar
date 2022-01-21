import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { AuthReducer } from './auth/reducer'
import { CartReducer } from './cart/reducer'
import { CategoriesReducer } from './categories/reducer'
import { CheckoutReducer } from './checkout/reducer'
import { CouponsReducer } from './coupons/reducer'
import { OrdersReducer } from './orders/reducer'
import { ProductsReducer } from './products/reducer'

export const rootReducer = combineReducers({
    auth: persistReducer(
        { key: 'auth', storage, whitelist: ['jwt', 'user'] },
        AuthReducer
    ),
    coupons: CouponsReducer,
    categories: CategoriesReducer,
    products: ProductsReducer,
    cart: persistReducer(
        { key: 'cart', storage, whitelist: ['cart'] },
        CartReducer
    ),
    checkout: persistReducer(
        { key: 'checkout', storage, whitelist: ['addresses', 'phones'] },
        CheckoutReducer
    ),
    orders: OrdersReducer
})

export type RootReducer = ReturnType<typeof rootReducer>