import { FC } from 'react'
import { useDispatch } from 'react-redux'
import {
    decreaseQuantity,
    increaseQuantity,
    removeItemFromCart
} from 'store/cart/actions'
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
    RemoveButton,
    RemoveIcon
} from './CartItem.styles'
import { CartItemProps } from './CartItem.types'

export const CartItem: FC<CartItemProps> = ({
    id,
    quantity,
    picture,
    name,
    price,
    size
}) => {
    const dispatch = useDispatch()

    const increaseQuantityHandler = (id: number) => {
        dispatch(increaseQuantity(id))
    }
    const decreaseQuantityHandler = (id: number) => {
        dispatch(decreaseQuantity(id))
    }
    const cartItemRemoveHandler = (id: number) => {
        dispatch(removeItemFromCart(id))
    }

    return (
        <ItemContainer>
            <LeftContent>
                <ItemCounter>
                    <CounterSection
                        isFirst
                        onClick={() => increaseQuantityHandler(id)}
                    >
                        <SecondaryText>+</SecondaryText>
                    </CounterSection>
                    <CounterSection>
                        {quantity && <PrimaryText>{quantity}</PrimaryText>}
                    </CounterSection>
                    <CounterSection
                        isLast
                        onClick={() => decreaseQuantityHandler(id)}
                    >
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
                <RemoveButton onClick={() => cartItemRemoveHandler(id)}>
                    <RemoveIcon />
                </RemoveButton>
            </RightContent>
        </ItemContainer>
    )
}