import { FC } from 'react'
import {
    RelatedContainer,
    RelatedProducts,
    Title
} from './Related.styles'
import { RelatedProps } from './Related.types'
import { ProductItem } from 'components/ProductItem/ProductItem.component'

export const Related: FC<RelatedProps> = ({ products, productId }) => {
    return (
        <RelatedContainer>
            <Title>Related Items</Title>
            <RelatedProducts>
                {products.filter(product => product.id !== +productId!).map(product => (
                    <ProductItem key={`related-${product.id}`} product={product} />
                ))}
            </RelatedProducts>
        </RelatedContainer>
    )
}