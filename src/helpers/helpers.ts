import { PurchaseItem } from 'store/cart/types'

export const cartItemFinder = (
    cart: PurchaseItem[],
    id: number
) => {
    return !!cart.find(item => item.id === id)
}