import { FC, MouseEvent, useCallback } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { removeAddress } from 'store/checkout/actions'
import { getDeliveryAddresses } from 'store/checkout/selectors'

// types
import { AddressItem } from 'store/checkout/types'
import { AddressStepProps } from './AddressStep.types'
import { CheckoutFormTypes } from 'pages/Checkout/components/CheckoutModal/CheckoutModal.types'

// styled components
import { StepOptions } from './AddressStep.styles'

// components
import { CheckoutStep } from 'components/CheckoutStep/CheckoutStep.component'
import { CheckoutOption } from 'components/CheckoutOption/CheckoutOption.component'

// helpers
import { equalityChecker } from 'helpers/comparators'

export const AddressStep: FC<AddressStepProps> = ({
    setFormType,
    setAddressId,
    addressId,
    orderValueHandler
}) => {
    const deliveryAddresses: AddressItem[] | [] = useSelector(getDeliveryAddresses)

    const dispatch = useDispatch()

    const editAddressHandler = useCallback(
        (id: string) =>
        (event: MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation()
            setAddressId(id)
            setFormType(CheckoutFormTypes.EDIT_ADDRESS)
        },
        [setAddressId, setFormType]
    )

    const removeAddressHandler = useCallback(
        (id: string) =>
        (event: MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation()
            dispatch(removeAddress(id))
        },
        [dispatch]
    )

    const formTypeHandler = useCallback(
        () => setFormType(CheckoutFormTypes.ADD_ADDRESS),
        [setFormType]
    )

    return (
        <CheckoutStep
            stepNumber={1}
            stepName='Delivery Address'
            stepLabel='Address'
            formTypeHandler={formTypeHandler}
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
                            isSelected={equalityChecker(addressId, address.id)}
                            onClick={orderValueHandler('addressId', address.id)}
                        />
                    ))}
                </StepOptions>
            )}
        </CheckoutStep>
    )
}