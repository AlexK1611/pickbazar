import { FC } from 'react'
import {
    CategoriesList,
    CategoryListItem,
    CategoryTitle,
    SubCategoriesList,
    SubCategoryTitle
} from './Categories.styles'
import { CategoriesProps } from './Categories.types'

export const Categories: FC<CategoriesProps> = ({
    categories,
    parentCategory,
    parentCategoryHandler,
    selectedCategory,
    categoryHandler
}) => {
    return (
        <CategoriesList>
            {categories.map(category => (
                <CategoryListItem key={`category-${category.id}`}>
                    <CategoryTitle
                        isSelected={category.id === parentCategory}
                        onClick={parentCategoryHandler(category.id)}
                    >
                        {category.title}
                    </CategoryTitle>
                    {category.id === parentCategory && (
                        <SubCategoriesList>
                            {category.childCategories.map(childCategory => (
                                <CategoryListItem
                                    key={`category-${childCategory.id}`}
                                    onClick={categoryHandler(childCategory.id)}
                                >
                                    <SubCategoryTitle isSelected={childCategory.id === selectedCategory}>
                                        {childCategory.title}
                                    </SubCategoryTitle>
                                </CategoryListItem>
                            ))}
                        </SubCategoriesList>
                    )}
                </CategoryListItem>
            ))}
        </CategoriesList>
    )
}