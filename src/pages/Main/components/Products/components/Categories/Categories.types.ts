import { CategoryItem } from 'store/categories/types'

export interface CategoriesProps {
    categories: CategoryItem[],
    parentCategory: number,
    parentCategoryHandler: (id: number) => () => void,
    selectedCategory: number,
    categoryHandler: (id: number) => () => void
}