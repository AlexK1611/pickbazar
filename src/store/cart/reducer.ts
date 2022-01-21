import { CartAction, CartActionTypes, CartState } from './types'

const initialState: CartState = {
    cart: JSON.parse(localStorage.getItem('cart') || '[]')
}

export const CartReducer = (state = initialState, action: CartAction): CartState => {
    switch (action.type) {
        case CartActionTypes.ADD_CART_ITEM: {
            return { ...state, cart: [...state.cart, action.payload] }
        }
        case CartActionTypes.REMOVE_CART_ITEM: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        }
        case CartActionTypes.INCREASE_QUANTITY: {
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload) {
                        item.quantity = item.quantity + 1
                    }
                    return item
                })
            }
        }
        case CartActionTypes.DECREASE_QUANTITY: {
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload) {
                        item.quantity = item.quantity - 1
                    }
                    return item
                })
            }
        }
        case CartActionTypes.CLEAR_CART: {
            return { ...state, cart: [] }
        }
        default: {
            return state
        }
    }
}