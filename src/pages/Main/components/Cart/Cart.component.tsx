import { FC } from 'react'
import ReactDOM from 'react-dom'
import { CartContainer } from './Cart.styles'
import { CartProps } from './Cart.types'
import { CartBody } from './components/CartBody/CartBody.component'
import { CartHeader } from './components/CartHeader/CartHeader.component'

export const Cart: FC<CartProps> = ({ isCart, closeCart }) => {
    const portalNode = document.getElementById('portal')!

    if (!isCart) return null

    return ReactDOM.createPortal(
        <CartContainer>
            <CartHeader closeCart={closeCart} />
            <CartBody />
        </CartContainer>,
        portalNode
    )
}