import { FC, useState, useCallback } from 'react'
import { TopSection } from './components/TopSection/TopSection.component'
import { Coupons } from './components/Coupons/Coupons.component'
import { Products } from './components/Products/Products.component'
import { CartButton } from 'components/CartButton/CartButton.component'
import { Cart } from 'components/Cart/Cart.component'

export const Main: FC = () => {
    const [isCartOpened, setCartOpened] = useState(false)
    const cartOpenedHandler = useCallback(
        () => setCartOpened(isCartOpened => !isCartOpened),
        []
    )

    return (
        <>
            <TopSection />
            <Coupons />
            <Products />
            <CartButton cartOpenedHandler={cartOpenedHandler} />
            <Cart
                isCartOpened={isCartOpened}
                cartOpenedHandler={cartOpenedHandler}
            />
        </>

    )
}