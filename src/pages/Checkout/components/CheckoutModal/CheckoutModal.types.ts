export interface CheckoutModalProps {
    isModal: boolean,
    setFormType: (param: string) => void,
    setAddressId: (param: string) => void,
    setPhoneNumber: (param: string) => void,
    formType: string,
    addressId?: string,
    phoneNumber?: string
}