import { ProductsState, ProductsAction, ProductsActionTypes } from './types'

const initialState: ProductsState = {
    products: null
}

export const ProductsReducer = (state = initialState, action: ProductsAction): ProductsState => {
    switch (action.type) {
        case ProductsActionTypes.SET_PRODUCTS: {
            return { ...state, products: action.payload }
        }
        default: {
            return state
        }
    }
}