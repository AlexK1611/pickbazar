import { FC, MouseEvent } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { removePhoneNumber } from 'store/checkout/actions'
import { getPhoneNumbers } from 'store/checkout/selectors'

// types
import { ContactStepProps } from './ContactStep.types'
import { PhoneNumberItem } from 'store/checkout/types'
import { RootReducer } from 'store/rootReducer'
import { OrderCreationTypes } from '../../StepsSection.types'

// styled components
import { StepOptions } from './ContactStep.styles'

// components
import { CheckoutStep } from 'components/CheckoutStep/CheckoutStep.component'
import { CheckoutOption } from 'components/CheckoutOption/CheckoutOption.component'

// helpers
import { valuesComparator } from '../../StepsSection.helpers'

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
            setFormType={setFormType}
            formType='add-number'
        >
            {phoneNumbers && (
                <StepOptions>
                    {phoneNumbers.map(phone => (
                        <CheckoutOption
                            // TODO: советую покопать в сторну uuid, чтоб у тебя изначально id был при создании номера. В будущем проще будет подменить данную схему на 
                            // беке
                            key={`phone-${phone.number.slice(0, 4)}-${phone.number.slice(-4)}`}
                            id={phone.number}
                            title={phone.title}
                            info={phone.number}
                            editAction={editPhoneNumberHandler}
                            removeAction={removePhoneNumberHandler}
                            isSelected={valuesComparator(state.number, phone.number)}
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