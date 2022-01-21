import { FC, useState, useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { categoriesRequest } from 'redux/categories/actions'
import { productsRequest } from 'redux/products/actions'
import { getCategories } from 'redux/categories/selectors'
import { getProducts } from 'redux/products/selectors'

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
    LoadMoreBtn,
    LoadMoreBtnTitle
} from './Products.styles'

// components
import { ProductsList } from './components/ProductsList/ProductsList.component'
import { Categories } from './components/Categories/Categories.component'

export const Products: FC = () => {
    const categories: CategoryItem[] | null = useSelector(
        (state: RootReducer) => getCategories(state)
    )
    const products: ProductUnit[] | null = useSelector(
        (state: RootReducer) => getProducts(state)
    )
    const dispatch = useDispatch()

    const [parentCategory, setParentCategory] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState(0)
    const [start, setStart] = useState(0)

    useEffect(() => {
        if (!categories) {
            dispatch(categoriesRequest())
        }
    }, [categories])

    useEffect(() => {
        if (selectedCategory) {
            dispatch(productsRequest(selectedCategory, start))
        }
    }, [selectedCategory, start])

    useEffect(() => {
        if (products && !selectedCategory) {
            setParentCategory(products[0].category.parentCategory.id)
            setSelectedCategory(products[0].category.id)
        }
    }, [products, selectedCategory])

    const categoryHandler = (category: number) => {
        if (category !== selectedCategory) {
            setStart(0)
        }
        setSelectedCategory(category)
    }

    return (
        <ProductsSectionContainer>
            <CategoriesSection>
                {categories && (
                    <Categories
                        categories={categories}
                        parentCategory={parentCategory}
                        setParentCategory={setParentCategory}
                        selectedCategory={selectedCategory}
                        categoryHandler={categoryHandler}
                    />
                )}
            </CategoriesSection>
            <ProductsSection>
                {!products && <ProductsMessage>Select category</ProductsMessage>}
                {products && <ProductsList products={products}/>}
                {products && products.length % 10 === 0 && (
                    // TODO: у тебя вьюшка не должна знать о количестве дополнительно запрашиваемых продуктов. Это так же должно быть частью онли редакса
                    <LoadMoreBtn onClick={() => setStart(start => start + 10)}>
                        <LoadMoreBtnTitle>Load More</LoadMoreBtnTitle>
                    </LoadMoreBtn>
                )}
            </ProductsSection>
        </ProductsSectionContainer>
    )
}