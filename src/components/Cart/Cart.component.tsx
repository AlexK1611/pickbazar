import { FC } from 'react'
import ReactDOM from 'react-dom'
import { CartContainer } from './Cart.styles'
import { CartProps } from './Cart.types'
import { CartBody } from './components/CartBody/CartBody.component'
import { CartHeader } from './components/CartHeader/CartHeader.component'

export const Cart: FC<CartProps> = ({ isCartOpened, setCartOpened }) => {
    const cartNode = document.getElementById('cart') as HTMLDivElement

    if (!isCartOpened) return null

    return ReactDOM.createPortal(
        <CartContainer>
            <CartHeader setCartOpened={setCartOpened} />
            <CartBody />
        </CartContainer>,
        cartNode
    )
}