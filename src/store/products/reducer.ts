import { ProductsState, ProductsAction, ProductsActionTypes } from './types'

const initialState: ProductsState = {
    products: null,
    productInfo: null,
    requestStart: 0
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
        case ProductsActionTypes.INCREASE_START: {
            return { ...state, requestStart: state.requestStart + 10 }
        }
        case ProductsActionTypes.RESET_START: {
            return { ...state, requestStart: 0 }
        }
        default: {
            return state
        }
    }
}