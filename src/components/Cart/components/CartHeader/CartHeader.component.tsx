import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getCartItemTypes } from 'store/cart/selectors'
import {
    HeaderContainer,
    ItemsContainer,
    ItemsIcon,
    ItemsCount,
    CloseButton,
    CloseIcon
} from './CartHeader.styles'
import { CartHeaderProps } from './CartHeader.types'

export const CartHeader: FC<CartHeaderProps> = ({ cartOpenedHandler }) => {
    const cartItemTypes: number = useSelector(getCartItemTypes)

    return (
        <HeaderContainer>
            <ItemsContainer>
                <ItemsIcon />
                <ItemsCount>{cartItemTypes} Item(s)</ItemsCount>
            </ItemsContainer>
            <CloseButton onClick={cartOpenedHandler}>
                <CloseIcon />
            </CloseButton>
        </HeaderContainer>
    )
}