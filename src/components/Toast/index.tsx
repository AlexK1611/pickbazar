import React from 'react'
import ReactDOM from 'react-dom'
import { ToastComponent, ToastMessage } from './styled'
import { ToastProps } from './types'

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