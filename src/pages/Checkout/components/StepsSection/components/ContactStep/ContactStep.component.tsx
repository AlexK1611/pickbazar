import { FC, MouseEvent } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { removePhoneNumber } from 'store/checkout/actions'
import { getPhoneNumbers } from 'store/checkout/selectors'

// types
import { ContactStepProps } from './ContactStep.types'
import { PhoneNumberItem } from 'store/checkout/types'

// styled components
import { StepOptions } from './ContactStep.styles'

// components
import { CheckoutStep } from 'components/CheckoutStep/CheckoutStep.component'
import { CheckoutOption } from 'components/CheckoutOption/CheckoutOption.component'

// helpers
import { valuesComparator } from '../../StepsSection.helpers'

export const ContactStep: FC<ContactStepProps> = ({
    setFormType,
    setPhoneId,
    state,
    setOption
}) => {
    const phoneNumbers: PhoneNumberItem[] = useSelector(getPhoneNumbers)

    const dispatch = useDispatch()

    const editPhoneNumberHandler = (event: MouseEvent<HTMLButtonElement>, id: string) => {
        event.stopPropagation()
        setPhoneId(id)
        setFormType('edit-number')
    }

    const removePhoneNumberHandler = (event: MouseEvent<HTMLButtonElement>, id: string) => {
        event.stopPropagation()
        dispatch(removePhoneNumber(id))
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
                            key={`phone-${phone.id}`}
                            id={phone.id}
                            title={phone.title}
                            info={phone.number}
                            editAction={editPhoneNumberHandler}
                            removeAction={removePhoneNumberHandler}
                            isSelected={valuesComparator(state.numberId, phone.id)}
                            onClick={() => setOption(phone.id)}
                        />
                    ))}
                </StepOptions>
            )}
        </CheckoutStep>
    )
}