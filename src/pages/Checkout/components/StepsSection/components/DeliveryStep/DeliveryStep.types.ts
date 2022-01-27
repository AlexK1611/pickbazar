export interface DeliverStepProps {
    scheduleId: string,
    orderValueHandler: (name: string, value: string) => () => void
}