export interface ScheduleItem {
    id: string,
    name: string,
    description: string,
    label: string,
    time: string
}

export interface PaymentOption {
    id: string,
    name: string,
    description: string
}

export interface CheckoutState {
    schedules: ScheduleItem[],
    payments: PaymentOption[]
}