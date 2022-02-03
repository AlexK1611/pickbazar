import { MouseEvent } from 'react'

export interface CheckoutOptionProps {
    id: string,
    title: string,
    info: string,
    isSelected?: boolean,
    editAction?: (id: string) => (event: MouseEvent<HTMLButtonElement>) => void,
    removeAction?: (id: string) => (event: MouseEvent<HTMLButtonElement>) => void,
    onClick: () => void
}