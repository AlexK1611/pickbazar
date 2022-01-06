import { FC } from 'react'
import { ProductsLayout } from './ProductsList.styles'
import { ProductsListProps } from './ProductsList.types'
import { ProductItem } from 'components/ProductItem/ProductItem.component'

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
    return (
        <ProductsLayout>
            {products.map(product => (
                <ProductItem
                    key={`product-${product.id}`}
                    title={product.name}
                    size={product.size}
                    finalPrice={product.finalPrice}
                    previousPrice={product.price !== product.finalPrice ? product.price : null}
                    discount={product.discount !== null ? product.discount.amount : product.discount}
                />
            ))}
        </ProductsLayout>
    )
}