export interface CheckoutStepProps {
    stepNumber: number,
    stepName: string,
    stepLabel?: string,
    addAction?: () => void
}