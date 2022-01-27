import { FC, useState, useEffect, useCallback } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { categoriesRequest } from 'store/categories/actions'
import {
    loadMoreProducts,
    productsRequest,
    resetProductsRequestStart
} from 'store/products/actions'
import { getCategories } from 'store/categories/selectors'
import { getProducts, getProductsRequestStart } from 'store/products/selectors'

// types
import { CategoryItem } from 'store/categories/types'
import { ProductUnit } from 'store/products/types'

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
    const categories: CategoryItem[] | null = useSelector(getCategories)
    const products: ProductUnit[] | null = useSelector(getProducts)
    const productsRequestStart: number = useSelector(getProductsRequestStart)
    const dispatch = useDispatch()

    const [parentCategory, setParentCategory] = useState(0)
    const parentCategoryHandler = useCallback(
        (category: number) => () => setParentCategory(category),
        []
    )

    const [selectedCategory, setSelectedCategory] = useState(0)
    const categoryHandler = useCallback(
        (category: number) => () => {
            if (category !== selectedCategory) {
                dispatch(resetProductsRequestStart())
            }
            setSelectedCategory(category)
        },
        [selectedCategory, dispatch]
    )

    useEffect(() => {
        if (!categories) {
            dispatch(categoriesRequest())
        }
    }, [categories])

    useEffect(() => {
        if (selectedCategory) {
            dispatch(productsRequest(selectedCategory, productsRequestStart))
        }
    }, [selectedCategory, productsRequestStart])

    useEffect(() => {
        if (products && !selectedCategory) {
            setParentCategory(products[0].category.parentCategory.id)
            setSelectedCategory(products[0].category.id)
        }
    }, [products, selectedCategory])

    const loadMoreHandler = () => {
        dispatch(loadMoreProducts())
    }

    return (
        <ProductsSectionContainer>
            <CategoriesSection>
                {categories && (
                    <Categories
                        categories={categories}
                        parentCategory={parentCategory}
                        parentCategoryHandler={parentCategoryHandler}
                        selectedCategory={selectedCategory}
                        categoryHandler={categoryHandler}
                    />
                )}
            </CategoriesSection>
            <ProductsSection>
                {!products && <ProductsMessage>Select category</ProductsMessage>}
                {products && (
                    <>
                        <ProductsList products={products}/>
                        <LoadMoreBtn onClick={loadMoreHandler}>
                            <LoadMoreBtnTitle>Load More</LoadMoreBtnTitle>
                        </LoadMoreBtn>
                    </>
                )}
            </ProductsSection>
        </ProductsSectionContainer>
    )
}