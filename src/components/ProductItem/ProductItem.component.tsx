import { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItemToCart } from 'redux/cart/actions'
import { getCartItemsSelector } from 'redux/cart/selectors'
import {
    ItemContainer,
    Discount,
    ItemLink,
    Picture,
    InfoSection,
    Title,
    Description,
    PurchaseSection,
    PreviousPrice,
    FinalPrice,
    Button,
    ButtonIcon,
    ButtonTitle
} from './ProductItem.styles'
import { ProductItemProps } from './ProductItem.types'
import { RootReducer } from 'redux/rootReducer'
import { PurchaseItem } from 'redux/cart/types'

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
    const cart: PurchaseItem[] | [] = useSelector((state: RootReducer) => getCartItemsSelector(state))
    const dispatch = useDispatch()
    
    return (
        <ItemContainer>
            {product.discount?.amount ? <Discount>{product.discount.amount}</Discount> : null}
            <ItemLink to={`/products/${product.id}`}>
                <Picture src={`${process.env.REACT_APP_HOST}${product.photos[0].url}`}/>
            </ItemLink>
            <InfoSection>
                <Title>{product.name}</Title>
                <Description>{product.size}</Description>
            </InfoSection>
            <PurchaseSection>
                {product.price !== product.finalPrice ? <PreviousPrice>{product.price}</PreviousPrice> : null}
                <FinalPrice>${product.finalPrice}</FinalPrice>
                <Button
                    disabled={!!cart.find(item => item.id === product.id)}
                    onClick={() => dispatch(addItemToCart(product))}
                >
                    <ButtonIcon/>
                    <ButtonTitle>Cart</ButtonTitle>
                </Button>
            </PurchaseSection>
        </ItemContainer>
    )
}