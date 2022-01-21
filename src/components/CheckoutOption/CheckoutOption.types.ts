import { MouseEvent } from 'react'

export interface CheckoutOptionProps {
    id: string,
    title: string,
    info: string,
    isSelected?: boolean,
    editAction?: (event: MouseEvent<HTMLButtonElement>, param: string) => void,
    removeAction?: (event: MouseEvent<HTMLButtonElement>, param: string) => void,
    onClick: () => void
}