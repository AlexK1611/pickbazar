import { FC } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { createOrderRequest } from 'store/orders/actions'
import { getPaymentOptions } from 'store/checkout/selectors'

// types
import { PaymentOption } from 'store/checkout/types'
import { PaymentStepProps } from './PaymentStep.types'

// styled components
import { StepOptions, StepInfo, TermsAndConditions } from './PaymentStep.styles'

// components
import { CheckoutStep } from 'components/CheckoutStep/CheckoutStep.component'
import { CheckoutOption } from 'components/CheckoutOption/CheckoutOption.component'
import { SubmitButton } from 'components/SubmitButton/SubmitButton.component'

// helpers
import { equalityChecker, everyChecker } from 'helpers/comparators'

export const PaymentStep: FC<PaymentStepProps> = ({ state, setOption }) => {
    const paymentOptions: PaymentOption[] = useSelector(getPaymentOptions)

    const dispatch = useDispatch()

    const createOrderHandler = (
        addressId: string | undefined,
        scheduleId: string | undefined,
        numberId: string | null,
        paymentId: string | undefined
    ) => {
        dispatch(createOrderRequest({ addressId, scheduleId, numberId, paymentId }))
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
                            isSelected={equalityChecker(state.paymentId,payment.id)}
                            /** TODO: функция в рендере */
                            onClick={() => setOption(payment.id)}
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
                disabled={!(everyChecker(
                    state.addressId, 
                    state.scheduleId, 
                    state.numberId, 
                    state.paymentId
                ))} /** TODO: вынеси в отдельную функцию */
                onClick={() => createOrderHandler(
                    state.addressId!,
                    state.scheduleId!,
                    state.numberId,
                    state.paymentId!
                )} /** TODO: функция в рендере */
            />
        </CheckoutStep>
    )
}