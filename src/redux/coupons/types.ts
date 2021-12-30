interface CouponItem {
    id: number,
    title: string,
    description: string,
    buttonText: string,
    gradientColors: {
        start: string,
        end: string
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
    updated_at: string
}

export interface CouponsResponse {
    data: CouponItem[]
}

export interface CouponsState {
    coupons: CouponItem[] | null
}

export enum CouponsActionTypes {
    SET_COUPONS = 'SET_COUPONS'
}

interface SetCouponsAction {
    type: CouponsActionTypes.SET_COUPONS,
    payload: CouponItem[]
}

export type CouponsAction = SetCouponsAction