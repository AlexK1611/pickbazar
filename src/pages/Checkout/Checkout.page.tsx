import { FC } from 'react'
import { CheckoutContainer } from './Checkout.styles'
import { StepsSection } from './components/Steps/StepsSection.component'
import { OrderSection } from './components/OrderSection/OrderSection.component'

export const Checkout: FC = () => {
    return (
        <CheckoutContainer>
            <StepsSection />
            <OrderSection />
        </CheckoutContainer>
    )
}