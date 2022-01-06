import { FC, useState, useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { categoriesRequest } from 'redux/categories/actions'
import { productsRequest } from 'redux/products/actions'
import { getCategoriesSelector } from 'redux/categories/selectors'
import { getProductsSelector } from 'redux/products/selectors'

// types
import { CategoryItem } from 'redux/categories/types'
import { ProductUnit } from 'redux/products/types'
import { RootReducer } from 'redux/rootReducer'

// styled components
import {
    ProductsSectionContainer,
    CategoriesSection,
    ProductsSection,
    ProductsMessage,
} from './Products.styles'

// components
import { ProductsList } from './components/ProductsList/ProductsList.component'
import { Categories } from './components/Categories/Categories.component'

export const Products: FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(categoriesRequest())
    }, [])
    const categories: CategoryItem[] | null = useSelector((state: RootReducer) => getCategoriesSelector(state))

    const [selectedCategory, setSelectedCategory] = useState(0)
    useEffect(() => {
        if (selectedCategory) {
            dispatch(productsRequest(selectedCategory))
        }
    }, [selectedCategory])
    const products: ProductUnit[] | null = useSelector((state: RootReducer) => getProductsSelector(state))

    return (
        <ProductsSectionContainer>
            <CategoriesSection>
                {categories && (
                    <Categories
                        categories={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                )}
            </CategoriesSection>
            <ProductsSection>
                {!selectedCategory && <ProductsMessage>Select category</ProductsMessage>}
                {products && <ProductsList products={products}/>}
            </ProductsSection>
        </ProductsSectionContainer>
    )
}