export interface ContactStepProps {
    setFormType: (arg: string) => void,
    setPhoneId: (arg: string) => void,
    numberId: string,
    orderValueHandler: (name: string, value: string) => () => void
}