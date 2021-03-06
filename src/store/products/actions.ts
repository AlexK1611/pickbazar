import { Dispatch } from 'redux'
import { axiosInstance } from 'config/api'
import { ProductInfoResponse, ProductsActionTypes, ProductUnit } from './types'
import { RootReducer } from 'store/rootReducer'

export const productsRequest = (category: number, start: number) => {
    return async (dispatch: Dispatch, getState: () => RootReducer) => {
        try {
            const { data } = await axiosInstance.get<ProductUnit[]>('/products',
                {
                    params: {
                        '_where[_or][0][category]': category,
                        '_start':start,
                        '_limit': 10
                    }
                }
            )
            const products = getState().products.products

            if (data.length === 0) {
                dispatch({ type: ProductsActionTypes.CLEAR_PRODUCTS })
            } else if (products && products[0].category.id === data[0].category.id) {
                const payload = products.concat(
                    data.filter((newItem: ProductUnit) => !products.some((oldItem: ProductUnit) => oldItem.id === newItem.id))
                )
                dispatch({ type: ProductsActionTypes.SET_PRODUCTS, payload })
            } else {
                dispatch({ type: ProductsActionTypes.SET_PRODUCTS, payload: data })
            }
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

export const loadMoreProducts = () => ({
    type: ProductsActionTypes.INCREASE_START
})

export const resetProductsRequestStart = () => ({
    type: ProductsActionTypes.RESET_START
})