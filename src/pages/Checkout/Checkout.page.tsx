import { FC, useState } from 'react'
import { CheckoutContainer } from './Checkout.styles'
import { StepsSection } from './components/StepsSection/StepsSection.component'
import { OrderSection } from './components/OrderSection/OrderSection.component'
import { CheckoutModal } from './components/CheckoutModal/CheckoutModal.component'

export const Checkout: FC = () => {
    const [formType, setFormType] = useState('')

    return (
        <CheckoutContainer>
            <StepsSection setFormType={setFormType} />
            <OrderSection />
            <CheckoutModal
                isModal={!!formType}
                closeModal={() => setFormType('')}
                formType={formType}
            />
        </CheckoutContainer>
    )
}