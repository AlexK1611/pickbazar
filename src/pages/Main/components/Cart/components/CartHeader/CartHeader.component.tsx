import { FC } from 'react'
import {
    HeaderContainer,
    ItemsContainer,
    ItemsIcon,
    ItemsCount,
    CloseButton
} from './CartHeader.styles'
import { CartHeaderProps } from './CartHeader.types'
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'

export const CartHeader: FC<CartHeaderProps> = ({ closeCart }) => {
    return (
        <HeaderContainer>
            <ItemsContainer>
                <ItemsIcon />
                <ItemsCount>0 Item(s)</ItemsCount>
            </ItemsContainer>
            <CloseButton onClick={closeCart}>
                <CloseIcon />
            </CloseButton>
        </HeaderContainer>
    )
}