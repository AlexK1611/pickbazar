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
    EDIT_ADDRESS = 'EDIT_ADDRESS',
    REMOVE_ADDRESS = 'REMOVE_ADDRESS',
    ADD_PHONE_NUMBER = 'ADD_PHONE_NUMBER',
    EDIT_PHONE_NUMBER = 'EDIT_PHONE_NUMBER',
    REMOVE_PHONE_NUMBER = 'REMOVE_PHONE_NUMBER'
}

interface AddAddressAction {
    type: CheckoutActionTypes.ADD_ADDRESS,
    payload: AddressItem
}

interface EditAddressAction {
    type: CheckoutActionTypes.EDIT_ADDRESS,
    payload: AddressItem
}

interface RemoveAddressAction {
    type: CheckoutActionTypes.REMOVE_ADDRESS,
    payload: string
}

interface AddPhoneNumberAction {
    type: CheckoutActionTypes.ADD_PHONE_NUMBER,
    payload: PhoneNumberItem
}

interface EditPhoneNumberAction {
    type: CheckoutActionTypes.EDIT_PHONE_NUMBER,
    payload: PhoneNumberItem
}

interface RemovePhoneNumberAction {
    type: CheckoutActionTypes.REMOVE_PHONE_NUMBER,
    payload: string
}

export type CheckoutAction = (
    AddAddressAction | 
    EditAddressAction |
    RemoveAddressAction |
    AddPhoneNumberAction |
    EditPhoneNumberAction |
    RemovePhoneNumberAction
)