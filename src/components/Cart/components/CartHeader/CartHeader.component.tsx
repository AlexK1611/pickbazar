import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getCartItemTypesSelector } from 'redux/cart/selectors'
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

export const CartHeader: FC<CartHeaderProps> = ({ closeCart }) => {
    const cartItemTypes = useSelector((state: RootReducer) => getCartItemTypesSelector(state))

    return (
        <HeaderContainer>
            <ItemsContainer>
                <ItemsIcon />
                <ItemsCount>{cartItemTypes} Item(s)</ItemsCount>
            </ItemsContainer>
            <CloseButton onClick={closeCart}>
                <CloseIcon />
            </CloseButton>
        </HeaderContainer>
    )
}