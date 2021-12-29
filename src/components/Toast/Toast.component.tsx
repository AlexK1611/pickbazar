import React from 'react'
import ReactDOM from 'react-dom'
import { ToastComponent, ToastMessage } from './Toast.styles'
import { ToastProps } from './Toast.types'

export const Toast = ({ isToast, message }: ToastProps) => {
    if (!isToast) return null

    const portalNode = document.getElementById('portal')!

    return ReactDOM.createPortal(
        <ToastComponent>
            <ToastMessage>{message}</ToastMessage>
        </ToastComponent>,
        portalNode
    )
}