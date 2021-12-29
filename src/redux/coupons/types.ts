export interface CouponsState {
    coupons: object[] | null
}

export enum CouponsActionTypes {
    SET_COUPONS = 'SET_COUPONS'
}

interface SetCouponsAction {
    type: CouponsActionTypes.SET_COUPONS,
    payload: object[]
}

export type CouponsAction = SetCouponsAction