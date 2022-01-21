import { FC, useState } from 'react'
import { TopSection } from './components/TopSection/TopSection.component'
import { Coupons } from './components/Coupons/Coupons.component'
import { Products } from './components/Products/Products.component'
import { CartButton } from 'components/CartButton/CartButton.component'
import { Cart } from 'components/Cart/Cart.component'

export const Main: FC = () => {
    const [isCartOpened, setCartOpened] = useState(false)
    return (
        <>
            <TopSection />
            <Coupons />
            <Products />
            <CartButton setCartOpened={setCartOpened} />
            <Cart
                isCartOpened={isCartOpened}
                setCartOpened={setCartOpened}
            />
        </>

    )
}