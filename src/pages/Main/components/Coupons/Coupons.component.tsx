import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { couponsRequest } from '../../../../redux/coupons/actions'
import { getCouponsSelector } from '../../../../redux/coupons/selectors'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import {
    CouponsContainer,
    Coupon,
    CouponTitle,
    CouponDescription,
    CouponButton,
    CouponButtonTitle
} from './Coupons.styles'
import { RootReducer } from '../../../../redux/rootReducer'
import { CouponItem } from '../../../../redux/coupons/types'

export const Coupons = () => {
    const coupons: CouponItem[] | null = useSelector(
        (state: RootReducer) => getCouponsSelector(state)
    )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(couponsRequest())
    }, [])

    SwiperCore.use([Navigation])

    return (
        <CouponsContainer>
            {coupons && (
                <Swiper
                    spaceBetween={40}
                    slidesPerView={window.innerWidth >= 1366 ? 3 : 2}
                    navigation
                >
                    {coupons.map(coupon => (
                        <SwiperSlide key={`coupon-${coupon.id}`}>
                            <Coupon
                                startColor={coupon.gradientColors.start}
                                endColor={coupon.gradientColors.end}
                            >
                                <CouponTitle>{coupon.title}</CouponTitle>
                                <CouponDescription>{coupon.description}</CouponDescription>
                                <CouponButton>
                                    <CouponButtonTitle color={coupon.gradientColors.start}>
                                        {coupon.buttonText}
                                    </CouponButtonTitle>
                                </CouponButton>
                            </Coupon>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </CouponsContainer>
    )
}