import { Dispatch } from 'react'
import { OrderCreationAction, OrderCreationState } from '../../StepsSection.types'

export interface ContactStepProps {
    setFormType: (arg: string) => void,
    setPhoneId: (arg: string) => void,
    state: OrderCreationState,
    action: Dispatch<OrderCreationAction>
}