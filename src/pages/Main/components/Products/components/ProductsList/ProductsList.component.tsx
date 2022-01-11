import { FC } from 'react'
import { ProductsLayout } from './ProductsList.styles'
import { ProductsListProps } from './ProductsList.types'
import { ProductItem } from 'components/ProductItem/ProductItem.component'

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
    return (
        <ProductsLayout>
            {products.map(product => (
                <ProductItem key={`product-${product.id}`} product={product} />
            ))}
        </ProductsLayout>
    )
}