import { FC } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { createOrderRequest } from 'redux/orders/actions'
import { getPaymentOptions } from 'redux/checkout/selectors'

// types
import { RootReducer } from 'redux/rootReducer'
import { PaymentOption } from 'redux/checkout/types'
import { PaymentStepProps } from './PaymentStep.types'
import { OrderCreationTypes } from '../../StepsSection.types'

// styled components
import { StepOptions, StepInfo, TermsAndConditions } from './PaymentStep.styles'

// components
import { CheckoutStep } from 'components/CheckoutStep/CheckoutStep.component'
import { CheckoutOption } from 'components/CheckoutOption/CheckoutOption.component'
import { SubmitButton } from 'components/SubmitButton/SubmitButton.component'

// helpers
import { valuesComparator } from '../../StepsSection.helpers'

export const PaymentStep: FC<PaymentStepProps> = ({ state, action }) => {
    const paymentOptions: PaymentOption[] = useSelector(
        (state: RootReducer) => getPaymentOptions(state)
    )

    const dispatch = useDispatch()

    return (
        <CheckoutStep
            stepNumber={4}
            stepName='Payment Option'
            stepLabel='Card'
            formType='add-payment'
        >
            {paymentOptions && (
                <StepOptions>
                    {paymentOptions.map(payment => (
                        <CheckoutOption
                            key={`payment-${payment.id}`}
                            id={payment.id}
                            title={payment.name}
                            info={payment.description}
                            isSelected={valuesComparator(state.payment?.id,payment.id)}
                            onClick={() => action({
                                type: OrderCreationTypes.SET_ORDER_PAYMENT,
                                payload: { id: payment.id, name: payment.name }
                            })}
                        />
                    ))}
                </StepOptions>
            )}
            <StepInfo>
                By making this purchase you agree to our
                <TermsAndConditions>terms and conditions.</TermsAndConditions>
            </StepInfo>
            <SubmitButton
                isWide
                title='Proceed to Checkout'
                disabled={!(
                    state.address && 
                    state.schedule && 
                    state.number && 
                    state.payment
                )}
                onClick={() => dispatch(createOrderRequest({
                    address: state.address?.description,
                    schedule: state.schedule?.description,
                    number: state.number,
                    payment: state.payment?.name
                }))}
            />
        </CheckoutStep>
    )
}