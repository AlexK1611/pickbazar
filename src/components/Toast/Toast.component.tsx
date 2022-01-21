import { FC } from 'react'
import ReactDOM from 'react-dom'
import { ToastComponent, ToastMessage } from './Toast.styles'
import { ToastProps } from './Toast.types'

export const Toast: FC<ToastProps> = ({ isToast, message }) => {
    if (!isToast) return null

    const toastNode = document.getElementById('toast') as HTMLDivElement

    return ReactDOM.createPortal(
        <ToastComponent>
            <ToastMessage>{message}</ToastMessage>
        </ToastComponent>,
        toastNode
    )
}