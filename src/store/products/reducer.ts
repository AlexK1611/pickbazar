import { ProductsState, ProductsAction, ProductsActionTypes } from './types'

const initialState: ProductsState = {
    products: null,
    productInfo: null
}

export const ProductsReducer = (state = initialState, action: ProductsAction): ProductsState => {
    switch (action.type) {
        case ProductsActionTypes.SET_PRODUCTS: {
            return { ...state, products: action.payload }
        }
        case ProductsActionTypes.SET_PRODUCT_INFO: {
            return { ...state, productInfo: action.payload }
        }
        case ProductsActionTypes.CLEAR_PRODUCTS: {
            return { ...state, products: null }
        }
        default: {
            return state
        }
    }
}