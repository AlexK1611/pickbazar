import { FC, MouseEvent } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { removePhoneNumber } from 'redux/checkout/actions'
import { getPhoneNumbers } from 'redux/checkout/selectors'

// types
import { ContactStepProps } from './ContactStep.types'
import { PhoneNumberItem } from 'redux/checkout/types'
import { RootReducer } from 'redux/rootReducer'
import { OrderCreationTypes } from '../../StepsSection.types'

// styled components
import { StepOptions } from './ContactStep.styles'

// components
import { CheckoutStep } from 'components/CheckoutStep/CheckoutStep.component'
import { CheckoutOption } from 'components/CheckoutOption/CheckoutOption.component'

export const ContactStep: FC<ContactStepProps> = ({
    setFormType,
    setPhoneNumber,
    state,
    action
}) => {
    const phoneNumbers: PhoneNumberItem[] = useSelector(
        (state: RootReducer) => getPhoneNumbers(state)
    )

    const dispatch = useDispatch()

    const editPhoneNumberHandler = (event: MouseEvent<HTMLButtonElement>, number: string) => {
        event.stopPropagation()
        setPhoneNumber(number)
        setFormType('edit-number')
    }

    const removePhoneNumberHandler = (event: MouseEvent<HTMLButtonElement>, number: string) => {
        event.stopPropagation()
        dispatch(removePhoneNumber(number))
    }

    return (
        <CheckoutStep
            stepNumber={3}
            stepName='Contact Number'
            stepLabel='Number'
            addAction={() => setFormType('add-number')}
        >
            {phoneNumbers && (
                <StepOptions>
                    {phoneNumbers.map(phone => (
                        <CheckoutOption
                            key={`phone-${phone.number.slice(0, 4)}-${phone.number.slice(-4)}`}
                            title={phone.title}
                            info={phone.number}
                            editAction={event => editPhoneNumberHandler(event, phone.number)}
                            removeAction={event => removePhoneNumberHandler(event, phone.number)}
                            isSelected={!!(state.number === phone.number)}
                            onClick={() => action({
                                type: OrderCreationTypes.SET_ORDER_PHONE_NUMBER,
                                payload: phone.number
                            })}
                        />
                    ))}
                </StepOptions>
            )}
        </CheckoutStep>
    )
}