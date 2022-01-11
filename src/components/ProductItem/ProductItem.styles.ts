import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as CartIcon } from 'assets/icons/cart.svg'

export const ItemContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 30px 25px;
    border-radius: 6px;
    background-color: #FFF;
`

export const Discount = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    border-radius: 23px;
    padding: 4px 10px;
    background-color: #FFAD5E;
    font-size: 13px;
    font-weight: 700;
    color: #FFF;
`

export const ItemLink = styled(Link)`
    display: flex;
    justify-content: center;
`

export const Picture = styled.img`
    width: 50%;
    aspect-ratio: 1;
    cursor: pointer;
`

export const InfoSection = styled.div`
    margin-top: 25px;
`

export const Title = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: #0D1136;
`

export const Description = styled.p`
    font-size: 13px;
    font-weight: 400;
    color: #77798C;
`

export const PurchaseSection = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`

export const PreviousPrice = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-50%);
    font-size: 13px;
    font-weight: 400;
    font-style: italic;
    color: #FFAD5E;
    text-decoration: line-through;
`

export const FinalPrice = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: #009E7F;
`

export const ButtonIcon = styled(CartIcon)`
    margin-right: 5px;
    fill: #009E7F;
`

export const ButtonTitle = styled.p`
    font-size: 13px;
    font-weight: 700;
    color: #009E7F;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border: 1px solid #F7F7F7;
    border-radius: 85px;
    background-color: #FFF;
    &:hover {
        border-color: #009E7F;
        background-color: #009E7F;
        ${ButtonIcon} {
            fill: #FFF;
        }
        ${ButtonTitle} {
            color: #FFF;
        }
    }
`