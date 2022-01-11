import { Dispatch } from 'redux'
import { ExtendedProductUnit, ProductUnit } from 'redux/products/types'
import { CartActionTypes } from './types'

export const addItemToCart = (purchase: ExtendedProductUnit | ProductUnit) => {
    return (dispatch: Dispatch) => {
        const payload = { ...purchase, quantity: 1 }
        dispatch({ type: CartActionTypes.ADD_CART_ITEM, payload })
    }
}

export const removeItemFromCart = (id: number) => {
    return {
        type: CartActionTypes.REMOVE_CART_ITEM,
        payload: id
    }
}