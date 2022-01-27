import { CategoryItem } from 'store/categories/types'

export interface CategoriesProps {
    categories: CategoryItem[],
    parentCategory: number,
    parentCategoryHandler: (arg: number) => () => void,
    selectedCategory: number,
    categoryHandler: (arg: number) => () => void
}