import { FC, useCallback, useReducer } from 'react'

// types
import { OrderValues, StepsSectionProps } from './StepsSection.types'

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
    setPhoneId
}) => {
    const initialValues: OrderValues = {
        addressId: '',
        scheduleId: '',
        numberId: '',
        paymentId: ''
    }
    const [orderValues, setOrderValues] = useReducer(
        (
            oldValues: OrderValues,
            newValues: { [key: string]: string }
        ) => ({ ...oldValues, ...newValues }),
        initialValues
    )
    const { addressId, scheduleId, numberId, paymentId } = orderValues
    const orderValueHandler = useCallback(
        (name: string, value: string) =>
        () => setOrderValues({ [name]: value }),
        []
    )

    return (
        <CheckoutSteps>
            <AddressStep
                setFormType={setFormType}
                setAddressId={setAddressId}
                addressId={addressId}
                orderValueHandler={orderValueHandler}
            />
            <DeliveryStep
                scheduleId={scheduleId}
                orderValueHandler={orderValueHandler}
            />
            <ContactStep
                setFormType={setFormType}
                setPhoneId={setPhoneId}
                numberId={numberId}
                orderValueHandler={orderValueHandler}
            />
            <PaymentStep
                paymentId={paymentId}
                orderValueHandler={orderValueHandler}
                orderValues={orderValues}
            />
        </CheckoutSteps>
    )
}