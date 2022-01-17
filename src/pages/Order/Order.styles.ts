import styled from 'styled-components'

export const OrderContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0;
    background-color: #F7F7F7;
`

export const OrderBody = styled.div`
    padding: 60px;
    border: 1px solid #F1F1F1;
    background-color: #FFFFFF;
`

export const OrderMessage = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: #0D1136;
    margin-top: 30px;
`

export const Subtitle = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: #0D1136;
`

export const Info = styled.p<{
    isColumn?: boolean
}>`
    font-size: 15px;
    font-weight: 400;
    color: #424561;
    margin-top: ${props => props.isColumn ? '10px' : '0'};
`

export const OverallInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`

export const DataSection = styled.div`
    margin-top: 60px;
    &:first-child {
        margin-top: 0;
    }
`

export const DataTitle = styled.h2`
    font-size: 21px;
    font-weight: 600;
    color: #0D1136;
`

export const DataItems = styled.div`
    margin-top: 30px;
`

export const DataItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 80px;
    margin-top: 20px;
    &:first-child {
        margin-top: 0;
    }
`