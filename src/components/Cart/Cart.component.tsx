import { FC } from 'react'
import ReactDOM from 'react-dom'
import { CartContainer } from './Cart.styles'
import { CartProps } from './Cart.types'
import { CartBody } from './components/CartBody/CartBody.component'
import { CartHeader } from './components/CartHeader/CartHeader.component'

// TODO: isCart пропсу тоже стоило бы переименовать, так как не понятно из нейминга для чего она
export const Cart: FC<CartProps> = ({ isCart, closeCart }) => {
    // TODO: Переименуй portal на cart-portal или что-то такое. Слишком общий нейминг для такой штуки
    const portalNode = document.getElementById('portal') as HTMLDivElement

    if (!isCart) return null

    return ReactDOM.createPortal(
        <CartContainer>
            <CartHeader closeCart={closeCart} />
            <CartBody />
        </CartContainer>,
        portalNode
    )
}