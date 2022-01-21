import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getCartItemTypes, getCartTotal } from 'store/cart/selectors'
import {
    ButtonContainer,
    ItemsContainer,
    ItemsIcon,
    ItemsCount,
    PriceContainer,
    Price
} from './CartButton.styles'
import { CartButtonProps } from './CartButton.types'
import { RootReducer } from 'store/rootReducer'

export const CartButton: FC<CartButtonProps> = ({ setCartOpened }) => {
    const cartItemTypes: number = useSelector(
        (state: RootReducer) => getCartItemTypes(state)
    )
    const cartTotal: number = useSelector(
        (state: RootReducer) => getCartTotal(state)
    )

    return (
        <ButtonContainer onClick={() => setCartOpened(true)}>
            <ItemsContainer>
                <ItemsIcon />
                <ItemsCount>{cartItemTypes} Item(s)</ItemsCount>
            </ItemsContainer>
            <PriceContainer>
                <Price>${cartTotal.toFixed(2)}</Price>
            </PriceContainer>
        </ButtonContainer>
    )
}