import { Dispatch } from 'redux'
import { ExtendedProductUnit, ProductUnit } from 'redux/products/types'
import { CartActionTypes } from './types'

export const addItemToCart = (purchase: ExtendedProductUnit | ProductUnit) => {
    return (dispatch: Dispatch) => {
        const payload = { ...purchase, quantity: 1 }
        dispatch({ type: CartActionTypes.ADD_CART_ITEM, payload })
        const cart = JSON.parse(localStorage.getItem('cart') || '[]')
        cart.push(payload)
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const removeItemFromCart = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: CartActionTypes.REMOVE_CART_ITEM,
            payload: id
        })
        const storagedCart: ExtendedProductUnit[] | ProductUnit[] = JSON.parse(localStorage.getItem('cart') || '[]')
        const updatedCart = storagedCart.filter(item => item.id !== id)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }
}