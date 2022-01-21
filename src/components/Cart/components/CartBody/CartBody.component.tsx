import { FC } from 'react'

// redux
import { useSelector } from 'react-redux'
import { getUser } from 'store/auth/selectors'
import { getCartItems, getCartTotal } from 'store/cart/selectors'

// styled components
import {
    BodyContainer,
    EmptySection,
    EmptyPicture,
    EmptyTitle,
    CheckoutSection,
    AuthMessage,
    CheckoutLink,
    CheckoutButton,
    ButtonTitle,
    PriceContainer,
    Price
} from './CartBody.styles'

// components
import { CartItem } from 'components/CartItem/CartItem.component'

// types
import { UserItem } from 'store/auth/types'
import { PurchaseItem } from 'store/cart/types'

// images
import emptyCart from 'assets/images/empty-cart.svg'

export const CartBody: FC = () => {
    const user: UserItem | null = useSelector(getUser)
    const cart: PurchaseItem[] | [] = useSelector(getCartItems)
    const cartTotal: number = useSelector(getCartTotal)

    return (
        <BodyContainer>
            {!cart.length && (
                <EmptySection>
                    <EmptyPicture src={emptyCart} />
                    <EmptyTitle>No products found</EmptyTitle>
                </EmptySection>
            )}
            <div>
                {cart.length > 0 && cart.map(item => (
                    <CartItem
                        key={`cart-item-${item.id}`}
                        id={item.id}
                        quantity={item.quantity}
                        picture={item.photos[0].url}
                        name={item.name}
                        price={item.price}
                        size={item.size}
                    />
                ))}
            </div>
            <CheckoutSection>
                {user ? (
                    <CheckoutLink to={cart.length > 0 ? '/checkout' : '/'}>
                        <CheckoutButton>
                            <ButtonTitle>Checkout</ButtonTitle>
                            <PriceContainer>
                                <Price>${cartTotal.toFixed(2)}</Price>
                            </PriceContainer>
                        </CheckoutButton>
                    </CheckoutLink>
                ) : <AuthMessage>Sign in to proceed</AuthMessage>}
            </CheckoutSection>
        </BodyContainer>
    )
}