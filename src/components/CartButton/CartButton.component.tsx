import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getCartItemTypes, getCartTotal } from 'redux/cart/selectors'
import {
    ButtonContainer,
    ItemsContainer,
    ItemsIcon,
    ItemsCount,
    PriceContainer,
    Price
} from './CartButton.styles'
import { CartButtonProps } from './CartButton.types'
import { RootReducer } from 'redux/rootReducer'

export const CartButton: FC<CartButtonProps> = ({ openCart }) => {
    const cartItemTypes = useSelector((state: RootReducer) => getCartItemTypes(state))
    const cartTotal = useSelector((state: RootReducer) => getCartTotal(state))

    return (
        <ButtonContainer onClick={openCart}>
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