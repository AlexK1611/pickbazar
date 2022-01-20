import { FC } from 'react'
import { useDispatch } from 'react-redux'
// TODO: Абсолютные пути конечно круто, но очень сильно сбивает момет `redux/cart/actions`. Есть стойкое ощущение что ты испортишь это из самого редакса.
import {
    decreaseQuantity,
    increaseQuantity,
    removeItemFromCart
} from 'redux/cart/actions'
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
    return (
        <ItemContainer>
            <LeftContent>
                <ItemCounter>
                    <CounterSection
                        isFirst
                        // TODO старайся избегать функций в рендере и изначально декларировать их перед return;
                        onClick={() => dispatch(increaseQuantity(id))}
                    >
                        <SecondaryText>+</SecondaryText>
                    </CounterSection>
                    <CounterSection>
                        {quantity && <PrimaryText>{quantity}</PrimaryText>}
                    </CounterSection>
                    <CounterSection
                        isLast
                        onClick={() => dispatch(decreaseQuantity(id))}
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
                <RemoveButton onClick={() => dispatch(removeItemFromCart(id))}>
                    <RemoveIcon />
                </RemoveButton>
            </RightContent>
        </ItemContainer>
    )
}