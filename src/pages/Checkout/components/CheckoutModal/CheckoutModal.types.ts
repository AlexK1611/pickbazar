export interface CheckoutModalProps {
    isModal: boolean,
    setFormType: (param: string) => void,
    setAddressId: (param: string) => void,
    setPhoneId: (param: string) => void,
    formType: string,
    addressId?: string,
    phoneId?: string
}