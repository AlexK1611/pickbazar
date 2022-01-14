import { FC } from 'react'

// redux
import { useSelector } from 'react-redux'
import {
    getDeliveryAddressesSelector,
    getDeliverySchedulesSelector,
    getPaymentOptionsSelector,
    getPhoneNumbersSelector
} from 'redux/checkout/selectors'

// types
import { RootReducer } from 'redux/rootReducer'
import {
    AddressItem,
    PaymentOption,
    PhoneNumberItem,
    ScheduleItem
} from 'redux/checkout/types'
import { StepsSectionProps } from './StepsSection.types'

import {
    CheckoutSteps,
    CheckoutStepOptions,
    CheckoutStepInfo,
    TermsAndConditions
} from './StepsSection.styles'
import { CheckoutOption } from 'components/CheckoutOption/CheckoutOption.component'
import { CheckoutStep } from 'components/CheckoutStep/CheckoutStep.component'
import { SubmitButton } from 'components/SubmitButton/SubmitButton.component'

export const StepsSection: FC<StepsSectionProps> = ({ setFormType }) => {
    const deliveryAddresses: AddressItem[] = useSelector((state: RootReducer) => getDeliveryAddressesSelector(state))
    const deliverySchedules: ScheduleItem[] = useSelector((state: RootReducer) => getDeliverySchedulesSelector(state))
    const phoneNumbers: PhoneNumberItem[] = useSelector((state: RootReducer) => getPhoneNumbersSelector(state))
    const paymentOptions: PaymentOption[] = useSelector((state: RootReducer) => getPaymentOptionsSelector(state))
    
    return (
        <CheckoutSteps>
            <CheckoutStep
                stepNumber={1}
                stepName='Delivery Address'
                stepLabel='Address'
                addAction={() => setFormType('add-address')}
            >
                {deliveryAddresses && (
                    <CheckoutStepOptions>
                        {deliveryAddresses.map(address => (
                            <CheckoutOption
                                key={`address-${address.id}`}
                                title={address.title}
                                info={address.description}
                            />
                        ))}
                    </CheckoutStepOptions>
                )}
            </CheckoutStep>
            <CheckoutStep
                stepNumber={2}
                stepName='Delivery Schedule'
            >
                {deliverySchedules && (
                    <>
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
                    </>
                )}
            </CheckoutStep>
            <CheckoutStep
                stepNumber={3}
                stepName='Contact Number'
                stepLabel='Number'
                addAction={() => setFormType('add-number')}
            >
                {phoneNumbers && (
                    <CheckoutStepOptions>
                        {phoneNumbers.map(phone => (
                            <CheckoutOption
                                key={`phone-${phone.number.slice(0, 4)}-${phone.number.slice(-4)}`}
                                title={phone.title}
                                info={phone.number}
                            />
                        ))}
                    </CheckoutStepOptions>
                )}
            </CheckoutStep>
            <CheckoutStep
                stepNumber={4}
                stepName='Payment Option'
                stepLabel='Card'
            >
                {paymentOptions && (
                    <CheckoutStepOptions>
                        {paymentOptions.map(payment => (
                            <CheckoutOption
                                key={`payment-${payment.id}`}
                                title={payment.name}
                                info={payment.description}
                            />
                        ))}
                    </CheckoutStepOptions>
                )}
                <CheckoutStepInfo>
                    By making this purchase you agree to our 
                    <TermsAndConditions>terms and conditions.</TermsAndConditions>
                </CheckoutStepInfo>
                <SubmitButton
                    isWide
                    title='Proceed to Checkout'
                    onClick={() => {}}
                />
            </CheckoutStep>
        </CheckoutSteps>
    )
}