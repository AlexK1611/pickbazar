import { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItemToCart } from 'store/cart/actions'
import { getCartItems } from 'store/cart/selectors'
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
import { PurchaseItem } from 'store/cart/types'
import { ExtendedProductUnit, ProductUnit } from 'store/products/types'

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
    const cart: PurchaseItem[] | [] = useSelector(getCartItems)
    const dispatch = useDispatch()

    const cartItemAddHandler = (product: ExtendedProductUnit | ProductUnit) => {
        dispatch(addItemToCart(product))
    }
    
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
                    disabled={!!cart.find(item => item.id === product.id)} /** TODO: вынеси в отдельную функцию */
                    onClick={() => cartItemAddHandler(product)} /** TODO: функция в рендере */
                >
                    <ButtonIcon/>
                    <ButtonTitle>Cart</ButtonTitle>
                </Button>
            </PurchaseSection>
        </ItemContainer>
    )
}