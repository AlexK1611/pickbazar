export interface StepsSectionProps {
    setFormType: (arg: string) => void,
    setAddressId: (arg: string) => void,
    setPhoneId: (arg: string) => void
}

export interface OrderValues {
    addressId: string,
    scheduleId: string,
    numberId: string,
    paymentId: string
}