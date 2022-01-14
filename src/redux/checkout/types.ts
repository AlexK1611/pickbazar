export interface AddressPayload {
    title: string,
    description: string
}

export interface AddressItem {
    id: string,
    title: string,
    description: string
}

export interface ScheduleItem {
    id: string,
    name: string,
    description: string,
    label: string,
    time: string
}

export interface PaymentOption {
    id: string,
    name: string,
    description: string
}

export interface CheckoutState {
    addresses: AddressItem[],
    schedules: ScheduleItem[],
    payments: PaymentOption[]
}

export enum CheckoutActionTypes {
    ADD_ADDRESS = 'ADD_ADDRESS'
}

interface AddAddressAction {
    type: CheckoutActionTypes.ADD_ADDRESS,
    payload: AddressItem
}

export type CheckoutAction = AddAddressAction