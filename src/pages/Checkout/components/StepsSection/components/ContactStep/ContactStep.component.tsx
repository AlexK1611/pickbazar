import { FC, MouseEvent, useCallback } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { removePhoneNumber } from 'store/checkout/actions'
import { getPhoneNumbers } from 'store/checkout/selectors'

// types
import { ContactStepProps } from './ContactStep.types'
import { PhoneNumberItem } from 'store/checkout/types'
import { CheckoutFormTypes } from 'pages/Checkout/components/CheckoutModal/CheckoutModal.types'

// styled components
import { StepOptions } from './ContactStep.styles'

// components
import { CheckoutStep } from 'components/CheckoutStep/CheckoutStep.component'
import { CheckoutOption } from 'components/CheckoutOption/CheckoutOption.component'

// helpers
import { equalityChecker } from 'helpers/comparators'

export const ContactStep: FC<ContactStepProps> = ({
    setFormType,
    setPhoneId,
    numberId,
    orderValueHandler
}) => {
    const phoneNumbers: PhoneNumberItem[] = useSelector(getPhoneNumbers)

    const dispatch = useDispatch()

    const editPhoneNumberHandler = useCallback(
        (id: string) =>
        (event: MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation()
            setPhoneId(id)
            setFormType(CheckoutFormTypes.EDIT_NUMBER)
        },
        [setPhoneId, setFormType]
    )

    const removePhoneNumberHandler = useCallback(
        (id: string) =>
        (event: MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation()
            dispatch(removePhoneNumber(id))
        },
        [dispatch]
    )

    const formTypeHandler = useCallback(
        () => setFormType(CheckoutFormTypes.ADD_NUMBER),
        [setFormType]
    )

    return (
        <CheckoutStep
            stepNumber={3}
            stepName='Contact Number'
            stepLabel='Number'
            formTypeHandler={formTypeHandler}
        >
            {phoneNumbers && (
                <StepOptions>
                    {phoneNumbers.map(phone => (
                        <CheckoutOption
                            key={`phone-${phone.id}`}
                            id={phone.id}
                            title={phone.title}
                            info={phone.number}
                            editAction={editPhoneNumberHandler}
                            removeAction={removePhoneNumberHandler}
                            isSelected={equalityChecker(numberId, phone.id)}
                            onClick={orderValueHandler('numberId', phone.id)}
                        />
                    ))}
                </StepOptions>
            )}
        </CheckoutStep>
    )
}