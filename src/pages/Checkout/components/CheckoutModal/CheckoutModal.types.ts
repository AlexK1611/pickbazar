export interface CheckoutModalProps {
    isModal: boolean,
    closeModal: () => void,
    formType: string,
    addressId?: string,
    phoneNumber?: string
}