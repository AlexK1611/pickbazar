import { Dispatch } from 'redux'
import { axiosInstance } from 'config/api'
import { ProductInfoResponse, ProductsActionTypes, ProductUnit } from './types'
import { RootReducer } from 'redux/rootReducer'

export const productsRequest = (category: number, start: number) => {
    return async (dispatch: Dispatch, getState: () => RootReducer) => {
        try {
            const { data } = await axiosInstance.get<ProductUnit[]>(
                // TODO: Почитай в axios про то, как можнно проще передавать query params
                `/products?_where[_or][0][category]=${category}&_start=${start}&_limit=10`
            )
            const products = getState().products.products

            if (data.length === 0) {
                dispatch({ type: ProductsActionTypes.CLEAR_PRODUCTS })
                // TODO а продукты то зачем в local storage ?
                if (localStorage.getItem('products')) localStorage.removeItem('products')
            } else if (products && products[0].category.id === data[0].category.id) {
                const payload = products.concat(
                    data.filter((newItem: ProductUnit) => !products.some((oldItem: ProductUnit) => oldItem.id === newItem.id))
                )
                dispatch({ type: ProductsActionTypes.SET_PRODUCTS, payload })
                localStorage.setItem('products', JSON.stringify(payload))
            } else {
                dispatch({ type: ProductsActionTypes.SET_PRODUCTS, payload: data })
                localStorage.setItem('products', JSON.stringify(data))
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