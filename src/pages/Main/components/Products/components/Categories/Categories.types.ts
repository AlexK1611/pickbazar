import { CategoryItem } from "redux/categories/types";

export interface CategoriesProps {
    categories: CategoryItem[],
    selectedCategory: number,
    setSelectedCategory: (arg: number) => void
}