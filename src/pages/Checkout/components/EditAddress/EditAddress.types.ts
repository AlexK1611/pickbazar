import { AddressItem } from 'redux/checkout/types'

export interface EditAddressProps {
    closeModal: () => void,
    dataToEdit: AddressItem
}

export interface AddressData {
    title: string,
    description: string
}