import styled from 'styled-components'
import { ReactComponent as CartIcon } from 'assets/icons/cart.svg'

export const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const PicturesSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    border-right: 1px solid #F1F1F1;
    border-radius: 6px 0 0 6px;
    background-color: #FFF;
`

export const SelectedPicture = styled.img`
    width: 33%;
`

export const Thumbnails = styled.div`
    display: flex;
    align-items: center;
`

export const ThumbnailItem = styled.img<{
    isSelected?: boolean
}>`
    width: 80px;
    margin: 0 12px;
    border: 2px solid;
    border-color: ${props => props.isSelected ? `#009E7F` : '#F1F1F1'};
    border-radius: 6px;
    cursor: pointer;
    &:first-child {
        margin-left: 0;
    };
    &:last-child {
        margin-right: 0;
    }
`

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 50px 10% 80px 10%;
    border-left: 1px solid #F1F1F1;
    border-radius: 0 6px 6px 0;
    background-color: #FFF;
`

export const TitleAndPrice = styled.div`
    display: flex;
    align-items: center;
`

export const Title = styled.h2`
    font-size: 21px;
    font-weight: 700;
    color: #000;
    margin-right: 10%;
`

export const Price = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: #009E7F;
`

export const Size = styled.p`
    font-size: 13px;
    font-weight: 700;
    color: #77798C;
    margin-top: 10px;
`

export const Description = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: #424561;
    line-height: 30px;
    margin-top: 30px;
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
    margin-top: 120px;
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
    &:disabled {
        border-color: rgba(0, 158, 127, 0);
        background-color: rgba(0, 158, 127, 0.5);
        cursor: not-allowed;
        ${ButtonIcon} {
            fill: #FFF;
        }
        ${ButtonTitle} {
            color: #FFF;
        }
    }
`

export const Category = styled.div`
    margin-top: 30px;
    padding: 7px 20px;
    border-radius: 6px;
    background-color: #F7F7F7;
`

export const CategoryTitle = styled.p`
    font-size: 13px;
    font-weight: 700;
    color: #0D1136;
`