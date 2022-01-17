import { FC, useState } from 'react'
import { CheckoutContainer } from './Checkout.styles'
import { StepsSection } from './components/StepsSection/StepsSection.component'
import { OrderSection } from './components/OrderSection/OrderSection.component'
import { CheckoutModal } from './components/CheckoutModal/CheckoutModal.component'

export const Checkout: FC = () => {
    const [formType, setFormType] = useState('')
    const [addressId, setAddressId] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    return (
        <CheckoutContainer>
            <StepsSection
                setFormType={setFormType}
                setAddressId={setAddressId}
                setPhoneNumber={setPhoneNumber}
            />
            <OrderSection />
            <CheckoutModal
                isModal={!!formType}
                closeModal={() => setFormType('')}
                formType={formType}
                addressId={addressId}
                phoneNumber={phoneNumber}
            />
        </CheckoutContainer>
    )
}