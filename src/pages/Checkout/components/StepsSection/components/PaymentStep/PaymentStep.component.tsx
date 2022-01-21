import { FC } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { createOrderRequest } from 'store/orders/actions'
import { getPaymentOptions } from 'store/checkout/selectors'

// types
import { PaymentOption } from 'store/checkout/types'
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
    const paymentOptions: PaymentOption[] = useSelector(getPaymentOptions)

    const dispatch = useDispatch()

    const createOrderHandler = (
        address: string | undefined,
        schedule: string | undefined,
        number: string | null,
        payment: string | undefined
    ) => {
        dispatch(createOrderRequest({ address, schedule, number, payment }))
    }

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
                onClick={() => createOrderHandler(
                    state.address?.description,
                    state.schedule?.description,
                    state.number,
                    state.payment?.name
                )}
            />
        </CheckoutStep>
    )
}