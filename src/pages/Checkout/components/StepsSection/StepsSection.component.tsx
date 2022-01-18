import { FC } from 'react'

// types
import { StepsSectionProps } from './StepsSection.types'

// styled components
import { CheckoutSteps } from './StepsSection.styles'

// components
import { AddressStep } from './components/AddressStep/AddressStep.component'
import { DeliveryStep } from './components/DeliveryStep/DeliveryStep.component'
import { ContactStep } from './components/ContactStep/ContactStep.component'
import { PaymentStep } from './components/PaymentStep/PaymentStep.component'

export const StepsSection: FC<StepsSectionProps> = ({
    setFormType,
    setAddressId,
    setPhoneNumber
}) => { 
    return (
        <CheckoutSteps>
            <AddressStep
                setFormType={setFormType}
                setAddressId={setAddressId}
            />
            <DeliveryStep />
            <ContactStep
                setFormType={setFormType}
                setPhoneNumber={setPhoneNumber}
            />
            <PaymentStep />
        </CheckoutSteps>
    )
}