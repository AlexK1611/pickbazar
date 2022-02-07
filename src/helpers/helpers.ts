import { PurchaseItem } from 'store/cart/types'

export const cartItemFinder = (
    cart: PurchaseItem[],
    id: number
) => {
    return !!cart.find(item => item.id === id)
}

export const valuesEqualityChecker = (
    first: string,
    second: string
) => {
    return first === second
}