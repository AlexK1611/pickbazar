import styled from 'styled-components'
import { ReactComponent as BagIcon } from 'assets/icons/bag.svg'

export const ButtonContainer = styled.div`
    position: fixed;
    z-index: 50;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 100px;
    padding: 10px;
    border-radius: 6px 0px 0px 6px;
    background-color: #009E7F;
    cursor: pointer;
`

export const ItemsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ItemsIcon = styled(BagIcon)`
    fill: #FFF;
`

export const ItemsCount = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #FFF;
`

export const PriceContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 24px;
    padding: 12px 0;
    border-radius: 6px;
    background-color: #FFF;
`

export const Price = styled.p`
    font-size: 13px;
    font-weight: 700;
    color: #009E7F;
`