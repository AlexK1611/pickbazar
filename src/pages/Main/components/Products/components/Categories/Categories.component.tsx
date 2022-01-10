import { FC, useState } from 'react'
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
    selectedCategory,
    setSelectedCategory
}) => {
    const [parentCategory, setParentCategory] = useState(0)

    return (
        <CategoriesList>
            {categories.map(category => (
                <CategoryListItem key={`category-${category.id}`}>
                    <CategoryTitle
                        isSelected={category.id === parentCategory}
                        onClick={() => setParentCategory(category.id)}
                    >
                        {category.title}
                    </CategoryTitle>
                    {category.id === parentCategory && (
                        <SubCategoriesList>
                            {category.childCategories.map(childCategory => (
                                <CategoryListItem
                                    key={`category-${childCategory.id}`}
                                    onClick={() => setSelectedCategory(childCategory.id)}
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