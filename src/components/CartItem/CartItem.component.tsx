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

    const increaseQuantityHandler = () => {
        dispatch(increaseQuantity(id))
    }
    const decreaseQuantityHandler = () => {
        dispatch(decreaseQuantity(id))
    }
    const cartItemRemoveHandler = () => {
        dispatch(removeItemFromCart(id))
    }

    return (
        <ItemContainer>
            <LeftContent>
                <ItemCounter>
                    <CounterSection
                        isFirst
                        onClick={increaseQuantityHandler}
                    >
                        <SecondaryText>+</SecondaryText>
                    </CounterSection>
                    <CounterSection>
                        {quantity && <PrimaryText>{quantity}</PrimaryText>}
                    </CounterSection>
                    <CounterSection
                        isLast
                        onClick={decreaseQuantityHandler}
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
                <RemoveButton onClick={cartItemRemoveHandler}>
                    <RemoveIcon />
                </RemoveButton>
            </RightContent>
        </ItemContainer>
    )
}