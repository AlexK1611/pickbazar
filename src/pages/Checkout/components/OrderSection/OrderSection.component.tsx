import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getCartItems, getCartTotal } from 'store/cart/selectors'
import {
    OrderContainer,
    Title,
    HighlightedText,
    SimpleText,
    OrderBody,
    OrderItemsList,
    OrderItem,
    QuantityAndSize
} from './OrderSection.styles'
import { PurchaseItem } from 'store/cart/types'

export const OrderSection: FC = () => {
    const cart: PurchaseItem[] | [] = useSelector(getCartItems)
    const cartTotal: number = useSelector(getCartTotal)

    return (
        <OrderContainer>
            <Title>Your Order</Title>
            <OrderBody>
                <OrderItemsList>
                    {cart.map(purchase => (
                        <OrderItem key={`purchase-${purchase.id}`}>
                            <QuantityAndSize>
                                <HighlightedText>{purchase.quantity}</HighlightedText> X {purchase.name} | {purchase.size}
                            </QuantityAndSize>
                            <SimpleText>${(purchase.quantity * purchase.price).toFixed(2)}</SimpleText>
                        </OrderItem>
                    ))}
                </OrderItemsList>
                <OrderItemsList>
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
                </OrderItemsList>
            </OrderBody>
        </OrderContainer>
    )
}