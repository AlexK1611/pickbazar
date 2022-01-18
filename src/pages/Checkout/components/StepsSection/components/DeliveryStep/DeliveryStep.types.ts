import { Dispatch } from 'react'
import { OrderCreationState, OrderCreationAction } from '../../StepsSection.types'

export interface DeliverStepProps {
    state: OrderCreationState,
    action: Dispatch<OrderCreationAction>
}