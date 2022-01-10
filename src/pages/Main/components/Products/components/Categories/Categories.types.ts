import { CategoryItem } from "redux/categories/types";

export interface CategoriesProps {
    categories: CategoryItem[],
    parentCategory: number,
    setParentCategory: (arg: number) => void,
    selectedCategory: number,
    categoryHandler: (arg: number) => void
}