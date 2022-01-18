import { Dispatch } from 'react'
import { OrderCreationAction, OrderCreationState } from '../../StepsSection.types'

export interface ContactStepProps {
    setFormType: (arg: string) => void,
    setPhoneNumber: (arg: string) => void,
    state: OrderCreationState,
    action: Dispatch<OrderCreationAction>
}