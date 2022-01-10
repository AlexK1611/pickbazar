import { Dispatch } from 'redux'
import { axiosInstance } from 'config/api'
import { ProductInfoResponse, ProductsActionTypes, ProductsResponse } from './types'

export const productsRequest = (category: number) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await axiosInstance.get<ProductsResponse>(
                `/products?_where[_or][0][category]=${category}&_start=0&_limit=10`
            )
            dispatch({ type: ProductsActionTypes.SET_PRODUCTS, payload: data })
        } catch (error) {
            console.log(error)
        }
    }
}

export const productInfoRequest = (id: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await axiosInstance.get<ProductInfoResponse>(`/products/${id}`)
            dispatch({ type: ProductsActionTypes.SET_PRODUCT_INFO, payload: data })
        } catch (error) {
            console.log(error)
        }
    }
}