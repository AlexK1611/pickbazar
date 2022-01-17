import { FC } from 'react'

// redux
import { useSelector } from 'react-redux'
import { getUserSelector } from 'redux/auth/selectors'
import { getCartItemsSelector, getCartTotalSelector } from 'redux/cart/selectors'

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
import { RootReducer } from 'redux/rootReducer'
import { PurchaseItem } from 'redux/cart/types'

// images
import emptyCart from 'assets/images/empty-cart.svg'

export const CartBody: FC = () => {
    const user = useSelector((state: RootReducer) => getUserSelector(state))
    const cart: PurchaseItem[] | [] = useSelector((state: RootReducer) => getCartItemsSelector(state))
    const cartTotal = useSelector((state: RootReducer) => getCartTotalSelector(state))

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