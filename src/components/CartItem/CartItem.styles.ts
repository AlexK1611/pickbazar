import styled from 'styled-components'

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 25px;
    border-bottom: 1px solid #F1F1F1;
`

export const PrimaryText = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: #000;
`

export const SecondaryText = styled.p`
    font-size: 13px;
    font-weight: 400;
    color: #77798C;
`

export const LeftContent = styled.div`
    display: flex;
    align-items: center;
`

export const ItemCounter = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    background-color: #F7F7F7;
    border-radius: 200px;
`

export const CounterSection = styled.div<{
    isFirst?: boolean,
    isLast?: boolean
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: ${props => props.isFirst ? '200px 200px 0 0' : props.isLast ? '0 0 200px 200px' : 'none'};
    cursor: ${props => props.isFirst || props.isLast ? 'pointer' : 'default'};
`

export const ItemPicture = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 15px;
`

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ItemCost = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: #009E7F;
`

export const RightContent = styled.div`
    display: flex;
`

export const RemoveButton = styled.button`
    width: 11px;
    height: 10px;
    margin-left: 20px;
    background-color: transparent;
`