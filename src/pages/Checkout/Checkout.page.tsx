import { FC } from 'react'
import { CheckoutContainer } from './Checkout.styles'
import { Order } from './components/Order/Order.component'

export const Checkout: FC = () => {
    return (
        <CheckoutContainer>
            <Order />
        </CheckoutContainer>
    )
}