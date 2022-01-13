import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getCartItemsSelector, getCartTotalSelector } from 'redux/cart/selectors'
import {
    OrderContainer,
    Title,
    HighlightedText,
    SimpleText,
    OrderItems,
    OrderSection,
    OrderItem,
    QuantityAndSize
} from './Order.styles'
import { RootReducer } from 'redux/rootReducer'
import { PurchaseItem } from 'redux/cart/types'


export const Order: FC = () => {
    const cart: PurchaseItem[] | [] = useSelector((state: RootReducer) => getCartItemsSelector(state))
    const cartTotal = useSelector((state: RootReducer) => getCartTotalSelector(state))

    return (
        <OrderContainer>
            <Title>Your Order</Title>
            <OrderItems>
                <OrderSection>
                    {cart.map(purchase => (
                        <OrderItem>
                            <QuantityAndSize>
                                <HighlightedText>{purchase.quantity}</HighlightedText> X {purchase.name} | {purchase.size}
                            </QuantityAndSize>
                            <SimpleText>${(purchase.quantity * purchase.price).toFixed(2)}</SimpleText>
                        </OrderItem>
                    ))}
                </OrderSection>
                <OrderSection>
                    <OrderItem>
                        <SimpleText>Sub Total</SimpleText>
                        <SimpleText>${cartTotal.toFixed(2)}</SimpleText>
                    </OrderItem>
                    <OrderItem>
                        <SimpleText>Delivery Fee</SimpleText>
                        <SimpleText>$3.00</SimpleText>
                    </OrderItem>
                    <OrderItem>
                        <SimpleText>Discount</SimpleText>
                        <SimpleText>$0.00</SimpleText>
                    </OrderItem>
                    <OrderItem>
                        <HighlightedText>Total (Incl. VAT)</HighlightedText>
                        <SimpleText>${(cartTotal + 3).toFixed(2)}</SimpleText>
                    </OrderItem>
                </OrderSection>
            </OrderItems>
        </OrderContainer>
    )
}