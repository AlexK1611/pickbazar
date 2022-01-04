import { FC, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { categoriesRequest } from 'redux/categories/actions'
import { getCategoriesSelector } from 'redux/categories/selectors'
import { CategoryItem } from 'redux/categories/types'
import { RootReducer } from 'redux/rootReducer'
import {
    CategoriesList,
    CategoriesSection,
    CategoryListItem,
    CategoryTitle,
    SubCategoriesList,
    SubCategoryTitle,
    ProductsSectionContainer
} from './Products.styles'

export const Products: FC = () => {
    const categories: CategoryItem[] | null = useSelector(
        (state: RootReducer) => getCategoriesSelector(state)
    )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(categoriesRequest())
    }, [])

    const [activeCategory, setActiveCategory] = useState(1)

    return (
        <ProductsSectionContainer>
            <CategoriesSection>
                {categories && (
                    <CategoriesList>
                        {categories.map(category => (
                            <CategoryListItem key={category.id}>
                                <CategoryTitle
                                    isSelected={category.id === activeCategory}
                                    onClick={() => setActiveCategory(category.id)}
                                >
                                    {category.title}
                                </CategoryTitle>
                                {category.id === activeCategory && (
                                    <SubCategoriesList>
                                        {category.childCategories.map(subCategory => (
                                            <CategoryListItem key={`subCategory-${subCategory.id}`}>
                                                <SubCategoryTitle>
                                                    {subCategory.title}
                                                </SubCategoryTitle>
                                            </CategoryListItem>
                                        ))}
                                    </SubCategoriesList>
                                )}
                            </CategoryListItem>
                        ))}
                    </CategoriesList>
                )}
            </CategoriesSection>
            <ProductsSectionContainer>

            </ProductsSectionContainer>
        </ProductsSectionContainer>
    )
}