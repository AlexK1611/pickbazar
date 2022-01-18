import { Dispatch } from 'react'
import { OrderCreationState, OrderCreationAction } from '../../StepsSection.types'

export interface PaymentStepProps {
    state: OrderCreationState,
    action: Dispatch<OrderCreationAction>
}