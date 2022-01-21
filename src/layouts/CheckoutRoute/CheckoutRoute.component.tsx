import { FC } from 'react'

// redux
import { useSelector } from 'react-redux'
import { getUser } from 'store/auth/selectors'
import { getCartItems } from 'store/cart/selectors'

// types 
import { RootReducer } from 'store/rootReducer'
import { UserItem } from 'store/auth/types'
import { PurchaseItem } from 'store/cart/types'
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