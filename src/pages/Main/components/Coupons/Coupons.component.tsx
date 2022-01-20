import { FC, useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { couponsRequest } from 'redux/coupons/actions'
import { getCoupons } from 'redux/coupons/selectors'

// libraries
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
// TODO: если это css - то лучше импортить в index.js/ts
import 'swiper/css'
import 'swiper/css/navigation'

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
import { RootReducer } from 'redux/rootReducer'
import { CouponItem } from 'redux/coupons/types'

export const Coupons: FC = () => {
    const coupons: CouponItem[] | null = useSelector(
        (state: RootReducer) => getCoupons(state)
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