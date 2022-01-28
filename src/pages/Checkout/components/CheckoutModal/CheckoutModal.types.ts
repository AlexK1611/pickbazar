export enum CheckoutFormTypes {
    ADD_ADDRESS = 'add-address',
    EDIT_ADDRESS = 'edit-address',
    ADD_NUMBER = 'add-number',
    EDIT_NUMBER = 'edit-number'
}

export interface CheckoutModalProps {
    isModal: boolean,
    setFormType: (param: string) => void,
    setAddressId: (param: string) => void,
    setPhoneId: (param: string) => void,
    formType: string,
    addressId?: string,
    phoneId?: string
}