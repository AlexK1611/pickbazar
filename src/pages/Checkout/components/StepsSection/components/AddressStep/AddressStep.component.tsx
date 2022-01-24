import { FC, MouseEvent } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { removeAddress } from 'store/checkout/actions'
import { getDeliveryAddresses } from 'store/checkout/selectors'

// types
import { AddressItem } from 'store/checkout/types'
import { AddressStepProps } from './AddressStep.types'

// styled components
import { StepOptions } from './AddressStep.styles'

// components
import { CheckoutStep } from 'components/CheckoutStep/CheckoutStep.component'
import { CheckoutOption } from 'components/CheckoutOption/CheckoutOption.component'

// helpers
import { valuesComparator } from '../../StepsSection.helpers'

export const AddressStep: FC<AddressStepProps> = ({
    setFormType,
    setAddressId,
    state,
    setOption
}) => {
    const deliveryAddresses: AddressItem[] | [] = useSelector(getDeliveryAddresses)

    const dispatch = useDispatch()

    const editAddressHandler = (event: MouseEvent<HTMLButtonElement>, id: string) => {
        event.stopPropagation()
        setAddressId(id)
        setFormType('edit-address')
    }

    const removeAddressHandler = (event: MouseEvent<HTMLButtonElement>, id: string) => {
        event.stopPropagation()
        dispatch(removeAddress(id))
    }

    return (
        <CheckoutStep
            stepNumber={1}
            stepName='Delivery Address'
            stepLabel='Address'
            setFormType={setFormType}
            formType='add-address'
        >
            {deliveryAddresses && (
                <StepOptions>
                    {deliveryAddresses.map(address => (
                        <CheckoutOption
                            key={`address-${address.id}`}
                            id={address.id}
                            title={address.title}
                            info={address.description}
                            editAction={editAddressHandler}
                            removeAction={removeAddressHandler}
                            isSelected={valuesComparator(state.addressId, address.id)}
                            onClick={() => setOption(address.id)}
                        />
                    ))}
                </StepOptions>
            )}
        </CheckoutStep>
    )
}