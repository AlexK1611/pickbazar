import { ExtendedProductUnit } from '../products/types'

export interface PurchaseItem extends ExtendedProductUnit {
    quantity: number
}

export interface CartState {
    cart: PurchaseItem[] | []
}

export enum CartActionTypes {
    ADD_CART_ITEM = 'ADD_CART_ITEM',
    REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
}

interface AddCartItemAction {
    type: CartActionTypes.ADD_CART_ITEM,
    payload: PurchaseItem
}

interface RemoveCartItemAction {
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: number
}

export type CartAction = AddCartItemAction | RemoveCartItemAction