import styled from 'styled-components'

export const ButtonContainer = styled.a<{
    bgColor: string
}>`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 15px;
    padding: 15px 0 15px 24%;
    border-radius: 6px;
    background-color: ${props => props.bgColor || '#000'};
`

export const ButtonTitle = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: #FFF;
    margin-left: 5px;
`