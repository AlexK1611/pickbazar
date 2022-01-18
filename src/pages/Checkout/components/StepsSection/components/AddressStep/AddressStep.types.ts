import { Dispatch } from 'react'
import { OrderCreationState, OrderCreationAction } from '../../StepsSection.types'

export interface AddressStepProps {
    setFormType: (arg: string) => void,
    setAddressId: (arg: string) => void,
    state: OrderCreationState,
    action: Dispatch<OrderCreationAction>
}