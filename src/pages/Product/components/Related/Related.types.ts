import { ProductUnit } from 'store/products/types'

export interface RelatedProps {
    products: ProductUnit[],
    productId?: string
}