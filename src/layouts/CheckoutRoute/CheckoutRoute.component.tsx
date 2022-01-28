import { FC } from 'react'

// redux
import { useSelector } from 'react-redux'
import { getUser } from 'store/auth/selectors'
import { getCartItems } from 'store/cart/selectors'

// types 
import { UserItem } from 'store/auth/types'
import { PurchaseItem } from 'store/cart/types'

// libraries
import { Navigate } from 'react-router-dom'

export const CheckoutRoute: FC = ({ children }) => {
    const user: UserItem | null = useSelector(getUser)
    const cart: PurchaseItem[] | [] = useSelector(getCartItems)

    return user && cart.length > 0 ? <>{children}</> : <Navigate to='/' />
}