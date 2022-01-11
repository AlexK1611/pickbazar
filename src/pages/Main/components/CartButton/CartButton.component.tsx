import { FC } from 'react'
import {
    ButtonContainer,
    ItemsContainer,
    ItemsIcon,
    ItemsCount,
    PriceContainer,
    Price
} from './CartButton.styles'
import { CartButtonProps } from './CartButton.types'

export const CartButton: FC<CartButtonProps> = ({ openCart }) => {
    return (
        <ButtonContainer onClick={openCart}>
            <ItemsContainer>
                <ItemsIcon />
                <ItemsCount>0 Item(s)</ItemsCount>
            </ItemsContainer>
            <PriceContainer>
                <Price>$0.00</Price>
            </PriceContainer>
        </ButtonContainer>
    )
}