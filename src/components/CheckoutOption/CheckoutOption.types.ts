import { MouseEvent } from 'react'

export interface CheckoutOptionProps {
    title: string,
    info: string,
    isSelected?: boolean,
    editAction?: (event: MouseEvent<HTMLButtonElement>) => void,
    removeAction?: (event: MouseEvent<HTMLButtonElement>) => void,
    onClick: () => void
}