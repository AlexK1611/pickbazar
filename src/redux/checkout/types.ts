export interface AddressPayload {
    title: string,
    description: string
}

export interface AddressItem extends AddressPayload {
    id: string
}

export interface ScheduleItem {
    id: string,
    name: string,
    description: string,
    label: string,
    time: string
}

export interface PhoneNumberPayload {
    title: string,
    number: string
}

export interface PhoneNumberItem {
    title: string,
    number: string
}

export interface PaymentOption {
    id: string,
    name: string,
    description: string
}

export interface CheckoutState {
    addresses: AddressItem[] | [],
    schedules: ScheduleItem[] | [],
    phones: PhoneNumberItem[] | [],
    payments: PaymentOption[] | []
}

export enum CheckoutActionTypes {
    ADD_ADDRESS = 'ADD_ADDRESS',
    ADD_PHONE_NUMBER = 'ADD_PHONE_NUMBER'
}

interface AddAddressAction {
    type: CheckoutActionTypes.ADD_ADDRESS,
    payload: AddressItem
}

interface AddPhoneNumber {
    type: CheckoutActionTypes.ADD_PHONE_NUMBER,
    payload: PhoneNumberItem
}

export type CheckoutAction = AddAddressAction | AddPhoneNumber