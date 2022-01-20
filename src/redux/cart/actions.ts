import { Dispatch } from 'redux'
import { ExtendedProductUnit, ProductUnit } from 'redux/products/types'
import { CartActionTypes, PurchaseItem } from './types'

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
        // TODO: а почему не redux-persist ?
        const storagedCart: PurchaseItem[] = JSON.parse(localStorage.getItem('cart') || '[]')
        const updatedCart = storagedCart.filter(item => item.id !== id)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }
}

export const increaseQuantity = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: CartActionTypes.INCREASE_QUANTITY,
            payload: id
        })
        const storagedCart: PurchaseItem[] = JSON.parse(localStorage.getItem('cart') || '[]')
        const updatedCart = storagedCart.map(item => {
            if (item.id === id) {
                item.quantity = item.quantity + 1
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }
}

export const decreaseQuantity = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: CartActionTypes.DECREASE_QUANTITY,
            payload: id
        })
        const storagedCart: PurchaseItem[] = JSON.parse(localStorage.getItem('cart') || '[]')
        const updatedCart = storagedCart.map(item => {
            if (item.id === id) {
                item.quantity = item.quantity - 1
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }
}

export const clearCart = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: CartActionTypes.CLEAR_CART })
        localStorage.removeItem('cart')
    }
}