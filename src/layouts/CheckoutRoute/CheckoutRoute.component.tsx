import { FC } from 'react'

// redux
import { useSelector } from 'react-redux'
import { getUser } from 'redux/auth/selectors'
import { getCartItems } from 'redux/cart/selectors'

// types 
import { RootReducer } from 'redux/rootReducer'
import { UserItem } from 'redux/auth/types'
import { PurchaseItem } from 'redux/cart/types'
import { CheckoutRouteProps } from './CheckoutRoute.types'

// libraries
import { Navigate } from 'react-router-dom'

export const CheckoutRoute: FC<CheckoutRouteProps> = ({ children }) => {
    const user: UserItem | null = useSelector(
        (state: RootReducer) => getUser(state)
    )
    const cart: PurchaseItem[] | [] = useSelector(
        (state: RootReducer) => getCartItems(state)
    )

    return user && cart.length > 0 ? children : <Navigate to='/' />
}