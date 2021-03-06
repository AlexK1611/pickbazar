import { FC } from 'react'

// redux
import { useSelector } from 'react-redux'
import { getCreatedOrder } from 'store/orders/selectors'

// types 
import { CreatedOrderItem } from 'store/orders/types'

// libraries
import { Navigate } from 'react-router-dom'

export const OrderRoute: FC = ({ children }) => {
    const createdOrder: CreatedOrderItem | null = useSelector(getCreatedOrder)

    return createdOrder ? <>{children}</> : <Navigate to='/' />
}