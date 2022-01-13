import { FC } from 'react'

// redux
import { useSelector } from 'react-redux'
import { getUserSelector } from 'redux/auth/selectors'
import { getCartItemsSelector } from 'redux/cart/selectors'

// types 
import { RootReducer } from 'redux/rootReducer'
import { PurchaseItem } from 'redux/cart/types'
import { CheckoutRouteProps } from './CheckoutRoute.types'

// libraries
import { Navigate } from 'react-router-dom'

export const CheckoutRoute: FC<CheckoutRouteProps> = ({ children }) => {
    const user = useSelector((state: RootReducer) => getUserSelector(state))
    const cart: PurchaseItem[] | [] = useSelector((state: RootReducer) => getCartItemsSelector(state))

    return user && cart.length > 0 ? children : <Navigate to='/' />
}