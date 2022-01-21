import { Dispatch } from 'redux'
import { ExtendedProductUnit, ProductUnit } from 'store/products/types'
import { CartActionTypes } from './types'

export const addItemToCart = (purchase: ExtendedProductUnit | ProductUnit) => {
    return (dispatch: Dispatch) => {
        const payload = { ...purchase, quantity: 1 }
        dispatch({
            type: CartActionTypes.ADD_CART_ITEM,
            payload
        })
    }
}

export const removeItemFromCart = (id: number) => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: id
})

export const increaseQuantity = (id: number) => ({
    type: CartActionTypes.INCREASE_QUANTITY,
    payload: id
})

export const decreaseQuantity = (id: number) => ({
    type: CartActionTypes.DECREASE_QUANTITY,
    payload: id
})

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
})