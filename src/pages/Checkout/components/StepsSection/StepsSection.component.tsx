import { FC, useReducer } from 'react'

// types
import { StepsSectionProps } from './StepsSection.types'

// styled components
import { CheckoutSteps } from './StepsSection.styles'

// components
import { AddressStep } from './components/AddressStep/AddressStep.component'
import { DeliveryStep } from './components/DeliveryStep/DeliveryStep.component'
import { ContactStep } from './components/ContactStep/ContactStep.component'
import { PaymentStep } from './components/PaymentStep/PaymentStep.component'

// state
import { orderCreationReducer, orderCreationState } from './StepsSection.state'

export const StepsSection: FC<StepsSectionProps> = ({
    setFormType,
    setAddressId,
    setPhoneId
}) => {
    const [state, action] = useReducer(orderCreationReducer, orderCreationState)

    return (
        <CheckoutSteps>
            <AddressStep
                setFormType={setFormType}
                setAddressId={setAddressId}
                state={state}
                action={action}
            />
            <DeliveryStep
                state={state}
                action={action}
            />
            <ContactStep
                setFormType={setFormType}
                setPhoneId={setPhoneId}
                state={state}
                action={action}
            />
            <PaymentStep
                state={state}
                action={action}
            />
        </CheckoutSteps>
    )
}