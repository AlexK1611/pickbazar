import styled from 'styled-components'
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'

export const Option = styled.div<{
    isSelected?: boolean
}>`
    max-width: 180px;
    padding: 15px;
    border: ${props => props.isSelected ? '1px solid #009E7F' : 'none'};
    border-radius: 6px;
    background-color: ${props => props.isSelected ? '#FFF' : '#F7F7F7'};
`

export const OptionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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

export const OptionTitle = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: #0D1136;
`

export const OptionInfo = styled.p`
    margin-top: 10px;
    font-size: 15px;
    font-weight: 700;
    color: #424561;
    line-height: 24px;
`