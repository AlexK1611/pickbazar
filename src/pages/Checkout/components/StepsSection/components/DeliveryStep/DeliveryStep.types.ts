import { OrderCreationState } from '../../StepsSection.types'

export interface DeliverStepProps {
    state: OrderCreationState,
    setOption: (arg: string) => void
}