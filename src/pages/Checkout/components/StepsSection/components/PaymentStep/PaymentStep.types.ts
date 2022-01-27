import { OrderValues } from "../../StepsSection.types";

export interface PaymentStepProps {
    paymentId: string,
    orderValueHandler: (name: string, value: string) => () => void,
    orderValues: OrderValues
}