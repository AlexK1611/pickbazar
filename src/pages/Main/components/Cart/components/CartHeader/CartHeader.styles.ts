import styled from 'styled-components'
import { ReactComponent as BagIcon } from 'assets/icons/bag.svg'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 30px;
    border-bottom: 1px solid #F1F1F1;
`

export const ItemsContainer = styled.div`
    display: flex;
    align-items: center;
`

export const ItemsIcon = styled(BagIcon)`
    fill: #009E7F;
`

export const ItemsCount = styled.p`
    font-size: 13px;
    font-weight: 700;
    color: #009E7F;
    margin-left: 10px;
`

export const CloseButton = styled.button`
    width: 10px;
    height: 10px;
    background-color: transparent;
`