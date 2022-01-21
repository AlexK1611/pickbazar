import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getCartItemTypes } from 'redux/cart/selectors'
import {
    HeaderContainer,
    ItemsContainer,
    ItemsIcon,
    ItemsCount,
    CloseButton,
    CloseIcon
} from './CartHeader.styles'
import { CartHeaderProps } from './CartHeader.types'
import { RootReducer } from 'redux/rootReducer'

export const CartHeader: FC<CartHeaderProps> = ({ setCartOpened }) => {
    const cartItemTypes: number = useSelector(
        (state: RootReducer) => getCartItemTypes(state)
    )

    return (
        <HeaderContainer>
            <ItemsContainer>
                <ItemsIcon />
                <ItemsCount>{cartItemTypes} Item(s)</ItemsCount>
            </ItemsContainer>
            <CloseButton onClick={() => setCartOpened(false)}>
                <CloseIcon />
            </CloseButton>
        </HeaderContainer>
    )
}