export interface StepsSectionProps {
    setFormType: (arg: string) => void,
    setAddressId: (arg: string) => void,
    setPhoneId: (arg: string) => void
}

export enum OrderCreationTypes {
    SET_ADDRESS_ID = 'SET_ADDRESS_ID',
    SET_SCHEDULE_ID = 'SET_SCHEDULE_ID',
    SET_PHONE_NUMBER_ID = 'SET_PHONE_NUMBER_ID',
    SET_PAYMENT_ID = 'SET_PAYMENT_ID'
}

interface SetAddressIdAction {
    type: OrderCreationTypes.SET_ADDRESS_ID,
    payload: string
}

interface SetScheduleIdAction {
    type: OrderCreationTypes.SET_SCHEDULE_ID,
    payload: string
}

interface SetPhoneNumberIdAction {
    type: OrderCreationTypes.SET_PHONE_NUMBER_ID,
    payload: string
}

interface SetPaymentIdAction {
    type: OrderCreationTypes.SET_PAYMENT_ID,
    payload: string
}

export interface OrderCreationState {
    addressId: string | null,
    scheduleId: string | null,
    numberId: string | null,
    paymentId: string | null
}

export type OrderCreationAction = (
    SetAddressIdAction |
    SetScheduleIdAction |
    SetPhoneNumberIdAction |
    SetPaymentIdAction
)