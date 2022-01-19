import { FC, useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { productInfoRequest, productsRequest } from 'redux/products/actions'
import { getProductInfo, getProducts } from 'redux/products/selectors'

// libraries
import { useParams } from 'react-router-dom'

// styled components
import { ProductPage } from './Product.styles'

// types
import { ExtendedProductUnit, ProductUnit } from 'redux/products/types'
import { RootReducer } from 'redux/rootReducer'

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
    const productInfo: ExtendedProductUnit | null = useSelector((state: RootReducer) => getProductInfo(state))

    useEffect(() => {
        if (productInfo) {
            dispatch(productsRequest(productInfo.category.id, 0))
        }
    }, [productInfo])
    const products: ProductUnit[] | null = useSelector((state: RootReducer) => getProducts(state))

    return (
        <ProductPage>
            {productInfo && <Info productInfo={productInfo} />}
            {products && <Related products={products} productId={productId} />}
        </ProductPage>
    )
}