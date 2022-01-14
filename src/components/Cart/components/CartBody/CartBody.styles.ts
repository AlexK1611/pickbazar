import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 51px);
`

export const EmptySection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15%;
`

export const EmptyPicture = styled.img`
    width: 70%;
`

export const EmptyTitle = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: #77798C;
    margin-top: 40px;
`

export const CheckoutSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    padding: 0 15px;
`

export const AuthMessage = styled.p`
    font-size: 21px;
    font-weight: 700;
    color: #009E7F;
`

export const CheckoutLink = styled(Link)`
    width: 100%;
`

export const CheckoutButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 20px;
    border: 1px solid #009E7F;
    border-radius: 85px;
    background-color: #009E7F;
`

export const ButtonTitle = styled.p`
    font-size: 13px;
    font-weight: 700;
    color: #FFF;
`

export const PriceContainer = styled.div`
    height: 100%;
    padding: 12px 24px;
    background-color: #FFF;
    border-radius: 85px;
`

export const Price = styled.p`
    font-size: 13px;
    font-weight: 700;
    color: #009E7F;
`