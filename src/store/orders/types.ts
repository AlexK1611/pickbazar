import { ExtendedProductUnit } from 'store/products/types'

export interface CreateOrderPayload {
    address?: string,
    schedule?: string,
    number: string | null,
    payment?: string
}

export interface CreatedOrderResponse {
    id: number,
    address: string,
    when: string,
    phone: string,
    email: string,
    buyer: null,
    created_by: null,
    updated_by: null,
    created_at: string,
    updated_at: string,
    products: ExtendedProductUnit[]
}

export interface CreatedOrderItem extends CreatedOrderResponse {
    schedule: string
    payment: string
}

export interface OrdersState {
    createdOrder: CreatedOrderItem | null
}

export enum OrdersActionTypes {
    SET_CREATED_ORDER = 'SET_CREATED_ORDER'
}

interface SetCreatedOrderAction {
    type: OrdersActionTypes,
    payload: CreatedOrderItem
}

export type OrdersAction = SetCreatedOrderAction