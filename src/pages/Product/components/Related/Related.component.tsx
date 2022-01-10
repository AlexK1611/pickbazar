import { FC } from 'react'
import {
    RelatedContainer,
    RelatedProducts,
    Title
} from './Related.styles'
import { RelatedProps } from './Related.types'
import { ProductItem } from 'components/ProductItem/ProductItem.component'
import { Link } from 'react-router-dom'

export const Related: FC<RelatedProps> = ({ products, productId }) => {
    return (
        <RelatedContainer>
            <Title>Related Items</Title>
            <RelatedProducts>
                {products.filter(product => product.id !== +productId!).map(product => (
                    <Link
                        to={`/products/${product.id}`}
                        key={`related-${product.id}`}
                    >
                        <ProductItem
                            picture={product.photos[0].url}
                            title={product.name}
                            size={product.size}
                            finalPrice={product.finalPrice}
                            previousPrice={product.price !== product.finalPrice ? product.price : null}
                            discount={product.discount !== null ? product.discount.amount : product.discount}
                        />
                    </Link>
                ))}
            </RelatedProducts>
        </RelatedContainer>
    )
}