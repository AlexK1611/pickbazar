import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { couponsRequest } from '../../../../redux/coupons/actions'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import {
    CouponsContainer,
    CouponItem,
    CouponTitle,
    CouponDescription,
    CouponButton,
    CouponButtonTitle
} from './Coupons.styles'
import { RootReducer } from '../../../../redux/rootReducer'
import { CouponItemProps } from './Coupons.types'

export const Coupons = () => {
    const coupons: CouponItemProps[] | null = useSelector((state: RootReducer) => state.coupons.coupons)
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
                            <CouponItem
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
                            </CouponItem>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </CouponsContainer>
    )
}