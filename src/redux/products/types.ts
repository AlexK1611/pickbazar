interface ProductPhoto {
    alternativeText: string,
    caption: string,
    width: number,
    height: number,
    formats: {
        thumbnail: {
            hash: string,
            width: number,
            height: number,
            url: string
        }
    },
    hash: string,
    url: string
}

export interface ProductUnit {
    id: number,
    name: string,
    size: string,
    price: number,
    description: string,
    category: {
        id: number,
        title: string,
        parentCategory: {
            id: number,
            title: string
        }
    },
    discount: {
        id: number,
        amount: number,
        title: string,
        isEnabled: boolean
    } | null,
    photos: ProductPhoto[],
    finalPrice: number
}

export interface ProductsResponse {
    data: ProductUnit[]
}

export interface ProductsState {
    products: ProductUnit[] | null
}

export enum ProductsActionTypes {
    SET_PRODUCTS = 'SET_PRODUCTS'
}

interface SetProductsAction {
    type: ProductsActionTypes.SET_PRODUCTS,
    payload: ProductUnit[]
}

export type ProductsAction = SetProductsAction