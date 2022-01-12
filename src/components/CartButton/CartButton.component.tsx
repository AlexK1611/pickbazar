import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getCartItemTypesSelector, getCartTotalSelector } from 'redux/cart/selectors'
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
    const cartItemTypes = useSelector((state: RootReducer) => getCartItemTypesSelector(state))
    const cartTotal = useSelector((state: RootReducer) => getCartTotalSelector(state))

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