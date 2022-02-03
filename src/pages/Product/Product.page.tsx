import { FC, useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { productInfoRequest, productsRequest } from 'store/products/actions'
import { getProductInfo, getRelatedProducts } from 'store/products/selectors'

// libraries
import { useParams } from 'react-router-dom'

// styled components
import { ProductPage } from './Product.styles'

// types
import { ExtendedProductUnit, ProductUnit } from 'store/products/types'

// components
import { Info } from './components/Info/Info.component'
import { Related } from './components/Related/Related.component'

export const Product: FC = () => {
    const { id: productId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        if (productId) {
            dispatch(productInfoRequest(productId))
        }
    }, [productId])
    const productInfo: ExtendedProductUnit | null = useSelector(getProductInfo)

    useEffect(() => {
        if (productInfo) {
            dispatch(productsRequest(productInfo.category.id, 0))
        }
    }, [productInfo])
    const relatedProducts: ProductUnit[] | undefined = useSelector(getRelatedProducts(productId!))

    return (
        <ProductPage>
            {productInfo && <Info productInfo={productInfo} />}
            {relatedProducts && <Related relatedProducts={relatedProducts} />}
        </ProductPage>
    )
}