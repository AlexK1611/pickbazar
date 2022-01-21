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

export interface ExtendedProductPhoto extends ProductPhoto {
    id: number,
    name: string,
    formats: {
        thumbnail: ProductPhoto['formats']['thumbnail'] & {
            name: string,
            ext: string,
            mime: string,
            size: number,
            path: null,
        }
    },
    ext: string,
    mime: string,
    size: number,
    previewUrl: null,
    provider: string,
    provider_metadata: null,
    created_by: number,
    updated_by: number,
    created_at: string,
    updated_at: string
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

export interface ExtendedProductUnit extends ProductUnit {
    category: ProductUnit['category'] & {
        parentCategory: number,
        created_by: number,
        updated_by: number,
        created_at: string,
        updated_at: string
    },
    created_by: {
        id: number,
        firstname: string,
        lastname: string,
        username: null
    },
    updated_by: {
        id: number,
        firstname: string,
        lastname: string,
        username: null
    },
    created_at: string,
    updated_at: string,
    photos: ExtendedProductPhoto[]
}

export interface ProductInfoResponse {
    data: ExtendedProductUnit
}

export interface ProductsState {
    products: ProductUnit[] | null,
    productInfo: ExtendedProductUnit | null
}

export enum ProductsActionTypes {
    SET_PRODUCTS = 'SET_PRODUCTS',
    SET_PRODUCT_INFO = 'SET_PRODUCT_INFO',
    CLEAR_PRODUCTS = 'CLEAR_PRODUCTS'
}

interface SetProductsAction {
    type: ProductsActionTypes.SET_PRODUCTS,
    payload: ProductUnit[]
}

interface SetProductInfoAction {
    type: ProductsActionTypes.SET_PRODUCT_INFO,
    payload: ExtendedProductUnit
}

interface ClearProductsAction {
    type: ProductsActionTypes.CLEAR_PRODUCTS
}

export type ProductsAction = SetProductsAction | SetProductInfoAction | ClearProductsAction