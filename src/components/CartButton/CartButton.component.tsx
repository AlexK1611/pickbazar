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

export const CartButton: FC<CartButtonProps> = ({ setCartOpened }) => {
    const cartItemTypes: number = useSelector(getCartItemTypes)
    const cartTotal: number = useSelector(getCartTotal)

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