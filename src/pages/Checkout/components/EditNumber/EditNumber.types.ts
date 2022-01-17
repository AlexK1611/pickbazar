import { PhoneNumberItem } from 'redux/checkout/types'

export interface EditNumberProps {
    closeModal: () => void,
    dataToEdit: PhoneNumberItem
}

export interface NumberData {
    title: string,
    number: string    
}