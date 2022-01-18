export interface StepsSectionProps {
    setFormType: (arg: string) => void,
    setAddressId: (arg: string) => void,
    setPhoneNumber: (arg: string) => void
}

export enum OrderCreationTypes {
    SET_ORDER_ADDRESS = 'SET_ORDER_ADDRESS',
    SET_ORDER_SCHEDULE = 'SET_ORDER_SCHEDULE',
    SET_ORDER_PHONE_NUMBER = 'SET_ORDER_PHONE_NUMBER',
    SET_ORDER_PAYMENT = 'SET_ORDER_PAYMENT'
}

interface OrderAddressData {
    id: string,
    description: string
}

interface OrderScheduleData {
    id: string,
    description: string
}

interface OrderPaymentData {
    id: string,
    name: string
}

interface SetOrderAddressAction {
    type: OrderCreationTypes.SET_ORDER_ADDRESS,
    payload: OrderAddressData
}

interface SetOrderScheduleAction {
    type: OrderCreationTypes.SET_ORDER_SCHEDULE,
    payload: OrderScheduleData
}

interface SetOrderPhoneNumberAction {
    type: OrderCreationTypes.SET_ORDER_PHONE_NUMBER,
    payload: string
}

interface SetOrderPaymentAction {
    type: OrderCreationTypes.SET_ORDER_PAYMENT,
    payload: OrderPaymentData
}

export interface OrderCreationState {
    address: OrderAddressData | null,
    schedule: OrderScheduleData | null,
    number: string | null,
    payment: OrderPaymentData | null
}

export type OrderCreationAction = (
    SetOrderAddressAction |
    SetOrderScheduleAction |
    SetOrderPhoneNumberAction |
    SetOrderPaymentAction
)