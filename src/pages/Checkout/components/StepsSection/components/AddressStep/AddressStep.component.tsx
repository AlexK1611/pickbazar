import { FC, MouseEvent } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { removeAddress } from 'store/checkout/actions'
import { getDeliveryAddresses } from 'store/checkout/selectors'

// types
import { AddressItem } from 'store/checkout/types'
import { RootReducer } from 'store/rootReducer'
import { AddressStepProps } from './AddressStep.types'
import { OrderCreationTypes } from '../../StepsSection.types'

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
    action
}) => {
    const deliveryAddresses: AddressItem[] | [] = useSelector(
        (state: RootReducer) => getDeliveryAddresses(state)
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
                            isSelected={valuesComparator(state.address?.id, address.id)}
                            // Вот такую штуку точно лучше делать во вьюшке. Ты смешал нутряк бизнес логики со вьюшкой. Вьюшка не должна знать о твоих потрохах редакса
                            onClick={() => action({
                                type: OrderCreationTypes.SET_ORDER_ADDRESS,
                                payload: { id: address.id, description: address.description }
                            })}
                        />
                    ))}
                </StepOptions>
            )}
        </CheckoutStep>
    )
}