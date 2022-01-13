export interface ScheduleItem {
    id: string,
    name: string,
    description: string,
    label: string,
    time: string
}

export interface CheckoutState {
    schedules: ScheduleItem[]
}