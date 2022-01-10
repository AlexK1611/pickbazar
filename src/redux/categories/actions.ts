import { Dispatch } from 'redux'
import { axiosInstance } from 'config/api'
import { CategoriesActionTypes, CategoriesResponse } from './types'

export const categoriesRequest = () => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await axiosInstance.get<CategoriesResponse>('/categories')
            dispatch({ type: CategoriesActionTypes.SET_CATEGORIES, payload: data })
            localStorage.setItem('categories', JSON.stringify(data))
        } catch (error) {
            console.log(error)
        }
    }
}