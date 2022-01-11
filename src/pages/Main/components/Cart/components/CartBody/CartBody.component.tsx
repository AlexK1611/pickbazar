import { FC } from 'react'
import {
    BodyContainer,
    EmptySection,
    EmptyPicture,
    EmptyTitle,
    CheckoutSection,
    CheckoutButton,
    ButtonTitle,
    PriceContainer,
    Price
} from './CartBody.styles'
import emptyCart from 'assets/images/empty-cart.svg'

export const CartBody: FC = () => {
    return (
        <BodyContainer>
            {true && (
                <EmptySection>
                    <EmptyPicture src={emptyCart}/>
                    <EmptyTitle>No products found</EmptyTitle>
                </EmptySection>
            )}
            <CheckoutSection>
                <CheckoutButton>
                    <ButtonTitle>Checkout</ButtonTitle>
                    <PriceContainer>
                        <Price>$0.00</Price>
                    </PriceContainer>
                </CheckoutButton>
            </CheckoutSection>
        </BodyContainer>
    )
}