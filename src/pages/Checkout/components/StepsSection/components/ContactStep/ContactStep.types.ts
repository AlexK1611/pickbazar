import { OrderCreationState } from '../../StepsSection.types'

export interface ContactStepProps {
    setFormType: (arg: string) => void,
    setPhoneId: (arg: string) => void,
    state: OrderCreationState,
    setOption: (arg: string) => void
}