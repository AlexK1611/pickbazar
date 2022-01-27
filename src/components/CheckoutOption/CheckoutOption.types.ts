import { MouseEvent } from 'react'

export interface CheckoutOptionProps {
    id: string,
    title: string,
    info: string,
    isSelected?: boolean,
    editAction?: (arg: string) => (event: MouseEvent<HTMLButtonElement>) => void,
    removeAction?: (arg: string) => (event: MouseEvent<HTMLButtonElement>) => void,
    onClick: () => void
}