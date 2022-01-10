import { CategoriesState, CategoriesAction, CategoriesActionTypes } from './types'

const initialState: CategoriesState = {
    categories: JSON.parse(localStorage.getItem('categories') || 'null')
}

export const CategoriesReducer = (state = initialState, action: CategoriesAction): CategoriesState => {
    switch (action.type) {
        case CategoriesActionTypes.SET_CATEGORIES: {
            return { ...state, categories: action.payload }
        }
        default: {
            return state
        }
    }
}