import { FC } from 'react'
import { ProductsLayout } from './ProductsList.styles'
import { ProductsListProps } from './ProductsList.types'
import { ProductItem } from 'components/ProductItem/ProductItem.component'
import { Link } from 'react-router-dom'

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
    return (
        <ProductsLayout>
            {products.map(product => (
                <Link
                    to={`/products/${product.id}`}
                    key={`product-${product.id}`}
                >
                    <ProductItem
                        title={product.name}
                        size={product.size}
                        finalPrice={product.finalPrice}
                        previousPrice={product.price !== product.finalPrice ? product.price : null}
                        discount={product.discount !== null ? product.discount.amount : product.discount}
                    />
                </Link>
            ))}
        </ProductsLayout>
    )
}