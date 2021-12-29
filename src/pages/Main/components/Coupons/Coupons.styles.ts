import styled from 'styled-components'
import { handleGradientColors } from './Coupons.helpers'

export const CouponsContainer = styled.div`
    padding: 55px;
    background-color: #FFF;
`

export const CouponItem = styled.div<{
    startColor: string,
    endColor: string
}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2vw;
    border-radius: 6px;
    background: ${props => handleGradientColors(props.startColor, props.endColor)};
    text-align: center;
`

export const CouponTitle = styled.p`
    font-size: 41px;
    font-weight: 700;
    color: #FFF;
`

export const CouponDescription = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #FFF;
    margin-top: 20px;
`

export const CouponButton = styled.button`
    display: flex;
    justify-content: center;
    width: 180px;
    padding: 15px 0;
    border-radius: 180px;
    background-color: #FFF;
    color: #000;
    margin-top: 40px;
`

export const CouponButtonTitle = styled.p<{
    color: string
}>`
    font-size: 18px;
    font-weight: 700;
    color: ${props => props.color || '#000'};
`