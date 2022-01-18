import { ExtendedProductUnit } from '../products/types'

export interface PurchaseItem extends ExtendedProductUnit {
    quantity: number
}

export interface CartState {
    cart: PurchaseItem[] | []
}

export enum CartActionTypes {
    ADD_CART_ITEM = 'ADD_CART_ITEM',
    REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
    INCREASE_QUANTITY = 'INCREASE_QUANTITY',
    DECREASE_QUANTITY = 'DECREASE_QUANTITY',
    CLEAR_CART = 'CLEAR_CART'
}

interface AddCartItemAction {
    type: CartActionTypes.ADD_CART_ITEM,
    payload: PurchaseItem
}

interface RemoveCartItemAction {
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: number
}

interface IncreaseQuantityAction {
    type: CartActionTypes.INCREASE_QUANTITY,
    payload: number
}

interface DecreaseQuantityAction {
    type: CartActionTypes.DECREASE_QUANTITY,
    payload: number
}

interface ClearCartAction {
    type: CartActionTypes.CLEAR_CART
}

export type CartAction = (
    AddCartItemAction | 
    RemoveCartItemAction |
    IncreaseQuantityAction |
    DecreaseQuantityAction |
    ClearCartAction
)