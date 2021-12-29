import styled from 'styled-components'

export const ButtonContainer = styled.button<{
    isWide?: boolean
}>`
    width: ${props => props.isWide ? '100%' : 'auto'};
    margin-top: ${props => props.isWide ? '30px' : '0'};
    padding: 10px 20px;
    border-radius: 6px;
    background-color: #009E7F;
`

export const ButtonTitle = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: #FFF;
`