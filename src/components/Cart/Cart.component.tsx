import { FC } from 'react'
import ReactDOM from 'react-dom'
import { CartContainer } from './Cart.styles'
import { CartProps } from './Cart.types'
import { CartBody } from './components/CartBody/CartBody.component'
import { CartHeader } from './components/CartHeader/CartHeader.component'

export const Cart: FC<CartProps> = ({ isCartOpened, closeCart }) => {
    // TODO: Переименуй portal на cart-portal или что-то такое. Слишком общий нейминг для такой штуки
    const portalNode = document.getElementById('portal') as HTMLDivElement

    if (!isCartOpened) return null

    return ReactDOM.createPortal(
        <CartContainer>
            <CartHeader closeCart={closeCart} />
            <CartBody />
        </CartContainer>,
        portalNode
    )
}