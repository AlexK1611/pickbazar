import styled from 'styled-components'
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'

export const CardContainer = styled.div`
    padding: 15px 20px;
    border-radius: 6px;
    background-color: #E4F4FF;
`

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const VisaImage = styled.img`
    width: 44px;
    height: 14px;
`

export const OptionButtons = styled.div`
    display: flex;
`

export const OptionButton = styled.button<{
    isDeleteBtn?: boolean
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    margin-left: 5px;
    border-radius: 10px;
    background-color: ${props => props.isDeleteBtn ? '#FF5B60' : '#009E7F'};
    &:first-child {
        margin-left: 0;
    }
`

export const RemoveIcon = styled(CloseIcon)`
    fill: #FFF;
`

export const CardNumberTitle = styled.p`
    margin-top: 10px;
    font-size: 10px;
    font-weight: 400;
    color: #77798C;
`

export const CardNumber = styled.p`
    margin-top: 10px;
    font-size: 14px;
    font-weight: 700;
    color: #0D1136;
`

export const CardHolder = styled.p`
    margin-top: 10px;
    font-size: 12px;
    font-weight: 700;
    color: #0D1136;
`