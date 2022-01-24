import { OrderCreationState } from '../../StepsSection.types'

export interface AddressStepProps {
    setFormType: (arg: string) => void,
    setAddressId: (arg: string) => void,
    state: OrderCreationState,
    setOption: (arg: string) => void
}