export interface CheckoutStepProps {
    stepNumber: number,
    stepName: string,
    stepLabel?: string,
    setFormType?: (param: string) => void,
    formType: string
}