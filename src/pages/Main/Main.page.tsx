import { FC, useState } from 'react'
import { TopSection } from './components/TopSection/TopSection.component'
import { Coupons } from './components/Coupons/Coupons.component'
import { Products } from './components/Products/Products.component'
import { CartButton } from 'components/CartButton/CartButton.component'
import { Cart } from 'components/Cart/Cart.component'

export const Main: FC = () => {
    const [isCart, handleCart] = useState(false)
    return (
        <>
            <TopSection />
            <Coupons />
            <Products />
            <CartButton openCart={() => handleCart(true)} />
            <Cart
                isCart={isCart}
                closeCart={() => handleCart(false)}
            />
        </>

    )
}