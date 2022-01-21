export interface CategoryItem {
    id: number,
    title: string,
    childCategories: {
        id: number,
        title: string
    }[]
}

export interface CategoriesResponse {
    data: CategoryItem[]
}

export interface CategoriesState {
    categories: CategoryItem[] | null
}

export enum CategoriesActionTypes {
    SET_CATEGORIES = 'SET_CATEGORIES'
}

interface SetCategoriesAction {
    type: CategoriesActionTypes.SET_CATEGORIES,
    payload: CategoryItem[]
}

export type CategoriesAction = SetCategoriesAction