export interface AddressStepProps {
    setFormType: (arg: string) => void,
    setAddressId: (arg: string) => void,
    addressId: string,
    orderValueHandler: (name: string, value: string) => () => void
}