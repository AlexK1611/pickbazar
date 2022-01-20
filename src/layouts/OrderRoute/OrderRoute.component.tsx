import { FC } from 'react'

// redux
import { useSelector } from 'react-redux'
import { getCreatedOrder } from 'redux/orders/selectors'

// types 
import { RootReducer } from 'redux/rootReducer'
import { OrderRouteProps } from './OrderRoute.types'
import { CreatedOrderItem } from 'redux/orders/types'

// libraries
import { Navigate } from 'react-router-dom'

export const OrderRoute: FC<OrderRouteProps> = ({ children }) => {
    const createdOrder: CreatedOrderItem | null = useSelector(
        (state: RootReducer) => getCreatedOrder(state)
    )

    return createdOrder ? children : <Navigate to='/' />
}