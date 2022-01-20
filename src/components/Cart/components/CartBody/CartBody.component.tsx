import { FC } from 'react'

// redux
import { useSelector } from 'react-redux'
import { getUser } from 'redux/auth/selectors'
import { getCartItems, getCartTotal } from 'redux/cart/selectors'

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
import { UserItem } from 'redux/auth/types'
import { PurchaseItem } from 'redux/cart/types'

// images
import emptyCart from 'assets/images/empty-cart.svg'

export const CartBody: FC = () => {
    // TODO: ты же ссылку по сути передаешь, зачем state => func(state) ?
    const user: UserItem | null = useSelector(
        (state: RootReducer) => getUser(state)
    )
    const cart: PurchaseItem[] | [] = useSelector(
        (state: RootReducer) => getCartItems(state)
    )
    const cartTotal: number = useSelector(
        (state: RootReducer) => getCartTotal(state)
    )

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