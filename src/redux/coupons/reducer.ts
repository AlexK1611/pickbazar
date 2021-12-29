import { CouponsState, CouponsAction, CouponsActionTypes } from './types'

const initialState: CouponsState = {
    coupons: null
}

export const CouponsReducer = (state = initialState, action: CouponsAction): CouponsState => {
    switch (action.type) {
        case CouponsActionTypes.SET_COUPONS: {
            return { ...state, coupons: action.payload }
        }
        default: {
            return state
        }
    }
}