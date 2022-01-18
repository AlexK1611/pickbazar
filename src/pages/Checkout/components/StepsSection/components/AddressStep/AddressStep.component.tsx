import { FC, MouseEvent } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { removeAddress } from 'redux/checkout/actions'
import { getDeliveryAddressesSelector } from 'redux/checkout/selectors'

// types
import { AddressItem } from 'redux/checkout/types'
import { RootReducer } from 'redux/rootReducer'
import { AddressStepProps } from './AddressStep.types'

// styled components
import { StepOptions } from './AddressStep.styles'

// components
import { CheckoutStep } from 'components/CheckoutStep/CheckoutStep.component'
import { CheckoutOption } from 'components/CheckoutOption/CheckoutOption.component'

export const AddressStep: FC<AddressStepProps> = ({ setFormType, setAddressId }) => {
    const deliveryAddresses: AddressItem[] = useSelector(
        (state: RootReducer) => getDeliveryAddressesSelector(state)
    )

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
            addAction={() => setFormType('add-address')}
        >
            {deliveryAddresses && (
                <StepOptions>
                    {deliveryAddresses.map(address => (
                        <CheckoutOption
                            key={`address-${address.id}`}
                            title={address.title}
                            info={address.description}
                            editAction={event => editAddressHandler(event, address.id)}
                            removeAction={event => removeAddressHandler(event, address.id)}
                        />
                    ))}
                </StepOptions>
            )}
        </CheckoutStep>
    )
}