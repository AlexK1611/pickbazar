import { FC } from 'react'
import { CheckoutContainer } from './Checkout.styles'
import { OrderSection } from './components/OrderSection/OrderSection.component'

export const Checkout: FC = () => {
    return (
        <CheckoutContainer>
            <OrderSection />
        </CheckoutContainer>
    )
}