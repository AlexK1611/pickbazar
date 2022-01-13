import { FC } from 'react'

// redux
import { useSelector } from 'react-redux'
import { getDeliverySchedulesSelector } from 'redux/checkout/selectors'

// types
import { RootReducer } from 'redux/rootReducer'
import { ScheduleItem } from 'redux/checkout/types'

import {
    CheckoutSteps,
    CheckoutStepOptions,
    CheckoutStepInfo,
    TermsAndConditions
} from './StepsSection.styles'
import { CheckoutOption } from 'components/CheckoutOption/CheckoutOption.component'
import { CheckoutStep } from 'components/CheckoutStep/CheckoutStep.component'
import { SubmitButton } from 'components/SubmitButton/SubmitButton.component'
import { CreditCard } from 'components/CreditCard/CreditCard.component'
import { addresses, contacts } from './StepsSection.helpers'

export const StepsSection: FC = () => {
    const deliverySchedules: ScheduleItem[] = useSelector((state: RootReducer) => getDeliverySchedulesSelector(state))
    
    return (
        <CheckoutSteps>
            {/* <CheckoutStep
                stepNumber={1}
                stepName='Delivery Address'
                stepLabel='Address'
                addAction={() => {}}
            >
                <CheckoutStepOptions>
                    {addresses.map(address => (
                        <CheckoutOption
                            key={`address-${address.id}`}
                            title={address.name}
                            info={`${address.address}, ${address.postalCode}`}
                            editAction={() => {}}
                            removeAction={() => {}}
                        />
                    ))}
                </CheckoutStepOptions>
            </CheckoutStep> */}
            <CheckoutStep
                stepNumber={2}
                stepName='Delivery Schedule'
            >
                <CheckoutStepOptions>
                    {deliverySchedules.map(schedule => (
                        <CheckoutOption
                            key={`delivery-${schedule.id}`}
                            title={schedule.name}
                            info={schedule.description}
                        />
                    ))}
                </CheckoutStepOptions>
                <CheckoutStepOptions>
                    {deliverySchedules.map(schedule => (
                        <CheckoutOption
                            key={`delivery-${schedule.id}`}
                            title={schedule.label}
                            info={schedule.time}
                        />
                    ))}
                </CheckoutStepOptions>
            </CheckoutStep>
            {/* <CheckoutStep
                stepNumber={3}
                stepName='Contact Number'
                stepLabel='Number'
                addAction={() => {}}
            >
                <CheckoutStepOptions>
                    {contacts.map(contact => (
                        <CheckoutOption
                            key={`contact-${contact.id}`}
                            title={contact.name}
                            info={contact.number}
                            editAction={() => {}}
                            removeAction={() => {}}
                        />
                    ))}
                </CheckoutStepOptions>
            </CheckoutStep>
            <CheckoutStep
                stepNumber={4}
                stepName='Payment Option'
                stepLabel='Card'
                addAction={() => {}}
            >
                <CheckoutStepOptions>
                    <CreditCard
                        cardNumber='1111 2222 3333 4444'
                        cardHolder='Card holder'
                        editAction={() => {}}
                        removeAction={() => {}}
                    />
                </CheckoutStepOptions>
                <CheckoutStepInfo>
                    By making this purchase you agree to our 
                    <TermsAndConditions>terms and conditions.</TermsAndConditions>
                </CheckoutStepInfo>
                <SubmitButton
                    isWide
                    title='Proceed to Checkout'
                    onClick={() => {}}
                />
            </CheckoutStep> */}
        </CheckoutSteps>
    )
}