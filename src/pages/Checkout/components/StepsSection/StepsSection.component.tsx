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
import {
    orderCreationReducer,
    orderCreationState,
    setOrderAddress,
    setOrderSchedule,
    setOrderPhoneNumber,
    setOrderPayment
} from './StepsSection.state'

export const StepsSection: FC<StepsSectionProps> = ({
    setFormType,
    setAddressId,
    setPhoneId
}) => {
    const [state, action] = useReducer(orderCreationReducer, orderCreationState)

    const setOrderAddressAction = (id: string) => {
        action(setOrderAddress(id))
    }
    const setOrderScheduleAction = (id: string) => {
        action(setOrderSchedule(id))
    }
    const setOrderPhoneNumberAction = (id: string) => {
        action(setOrderPhoneNumber(id))
    }
    const setOrderPaymentAction = (id: string) => {
        action(setOrderPayment(id))
    }

    return (
        <CheckoutSteps>
            <AddressStep
                setFormType={setFormType}
                setAddressId={setAddressId}
                state={state}
                setOption={setOrderAddressAction}
            />
            <DeliveryStep
                state={state}
                setOption={setOrderScheduleAction}
            />
            <ContactStep
                setFormType={setFormType}
                setPhoneId={setPhoneId}
                state={state}
                setOption={setOrderPhoneNumberAction}
            />
            <PaymentStep
                state={state}
                setOption={setOrderPaymentAction}
            />
        </CheckoutSteps>
    )
}