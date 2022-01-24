import { OrderCreationState } from '../../StepsSection.types'

export interface PaymentStepProps {
    state: OrderCreationState,
    setOption: (arg: string) => void
}