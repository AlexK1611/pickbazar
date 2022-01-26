import { FC, useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { couponsRequest } from 'store/coupons/actions'
import { getCoupons } from 'store/coupons/selectors'

// libraries
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'

// styled components
import {
    CouponsContainer,
    Coupon,
    CouponTitle,
    CouponDescription,
    CouponButton,
    CouponButtonTitle
} from './Coupons.styles'

// types
import { CouponItem } from 'store/coupons/types'

export const Coupons: FC = () => {
    const coupons: CouponItem[] | null = useSelector(getCoupons)
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
                    slidesPerView={window.innerWidth >= 1366 ? 3 : 2} /** TODO: рекомендую запихнуть это в константу, чтоб было понятно что это и зачем */
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