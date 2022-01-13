import styled from 'styled-components'

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    margin-left: 25px;
`

export const Title = styled.p`
    align-self: center;
    font-size: 15px;
    font-weight: 700;
    color: #000;
`

export const HighlightedText = styled.span<{
    isQuantity?: boolean
}>`
    font-size: 14px;
    font-weight: 700;
    color: #0D1136;
    margin-right: ${props => props.isQuantity ? '3px' : '0'};
`

export const SimpleText = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #77798C;
`

export const OrderBody = styled.div`
    margin-top: 20px;
`

export const OrderItemsList = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #E6E6E6;
    &:last-child {
        border-bottom: none;
    }
`

export const OrderItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    &:first-child {
        margin-top: 0;
    }
    &:last-child {
        margin-top: 25px;
    }
`

export const QuantityAndSize = styled.p`
    margin-right: 10px;
    font-size: 14px;
    font-weight: 400;
    color: #77798C;
`