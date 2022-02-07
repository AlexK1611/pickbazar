import { FC } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { createOrderRequest } from 'store/orders/actions'
import { getPaymentOptions } from 'store/checkout/selectors'

// types
import { PaymentOption } from 'store/checkout/types'
import { PaymentStepProps } from './PaymentStep.types'

// styled components
import { StepOptions } from '../../StepsSection.styles'
import { StepInfo, TermsAndConditions } from './PaymentStep.styles'

// components
import { CheckoutStep } from 'components/CheckoutStep/CheckoutStep.component'
import { CheckoutOption } from 'components/CheckoutOption/CheckoutOption.component'
import { SubmitButton } from 'components/SubmitButton/SubmitButton.component'

// helpers
import { orderValuesChecker } from './PaymentStep.helpers'
import { valuesEqualityChecker } from 'helpers/helpers'

export const PaymentStep: FC<PaymentStepProps> = ({
    paymentId,
    orderValueHandler,
    orderValues
}) => {
    const paymentOptions: PaymentOption[] = useSelector(getPaymentOptions)

    const dispatch = useDispatch()

    const createOrderHandler = () => {
        dispatch(createOrderRequest(orderValues))
    }

    return (
        <CheckoutStep
            stepNumber={4}
            stepName='Payment Option'
            stepLabel='Card'
        >
            {paymentOptions && (
                <StepOptions>
                    {paymentOptions.map(payment => (
                        <CheckoutOption
                            key={`payment-${payment.id}`}
                            id={payment.id}
                            title={payment.name}
                            info={payment.description}
                            isSelected={valuesEqualityChecker(paymentId, payment.id)}
                            onClick={orderValueHandler('paymentId', payment.id)}
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
                disabled={!orderValuesChecker(orderValues)}
                onClick={createOrderHandler}
            />
        </CheckoutStep>
    )
}