import { FC } from 'react'
import ReactDOM from 'react-dom'
import { ToastComponent, ToastMessage } from './Toast.styles'
import { ToastProps } from './Toast.types'

export const Toast: FC<ToastProps> = ({ isToast, message }) => {
    if (!isToast) return null

    // TODO: вот как раз тут ты себе в колено и шмальнул. У тебя два координально разных элемента рендерятся в одном диве.
    const portalNode = document.getElementById('portal') as HTMLDivElement

    return ReactDOM.createPortal(
        <ToastComponent>
            <ToastMessage>{message}</ToastMessage>
        </ToastComponent>,
        portalNode
    )
}