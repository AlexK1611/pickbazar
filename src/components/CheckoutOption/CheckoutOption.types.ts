export interface CheckoutOptionProps {
    title: string,
    info: string,
    isSelected?: boolean,
    editAction?: () => void,
    removeAction?: () => void
}