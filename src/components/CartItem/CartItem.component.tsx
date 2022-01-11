import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { removeItemFromCart } from 'redux/cart/actions'
import {
    ItemContainer,
    PrimaryText,
    SecondaryText,
    LeftContent,
    ItemCounter,
    CounterSection,
    ItemPicture,
    ItemInfo,
    ItemCost,
    RightContent,
    RemoveButton
} from './CartItem.styles'
import { CartItemProps } from './CartItem.types'
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'

export const CartItem: FC<CartItemProps> = ({
    id,
    quantity,
    picture,
    name,
    price,
    size
}) => {
    const dispatch = useDispatch()
    return (
        <ItemContainer>
            <LeftContent>
                <ItemCounter>
                    <CounterSection isFirst>
                        <SecondaryText>+</SecondaryText>
                    </CounterSection>
                    <CounterSection>
                        {quantity && <PrimaryText>{quantity}</PrimaryText>}
                    </CounterSection>
                    <CounterSection isLast>
                        <SecondaryText>-</SecondaryText>
                    </CounterSection>
                </ItemCounter>
                {picture && <ItemPicture src={`${process.env.REACT_APP_HOST}${picture}`} />}
                <ItemInfo>
                    {name && <PrimaryText>{name}</PrimaryText>}
                    {price && <ItemCost>${price}</ItemCost>}
                    {quantity && size && <SecondaryText>{quantity} x {size}</SecondaryText>}
                </ItemInfo>
            </LeftContent>
            <RightContent>
                {quantity && price && <PrimaryText>${(quantity * price).toFixed(2)}</PrimaryText>}
                <RemoveButton onClick={() => dispatch(removeItemFromCart(id))}>
                    <CloseIcon />
                </RemoveButton>
            </RightContent>
        </ItemContainer>
    )
}