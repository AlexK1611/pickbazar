import styled from 'styled-components'
import mainGroceryBg from 'assets/images/mainGrocery.png'

export const TopSectionContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-image: url(${mainGroceryBg});
    background-size: cover;
    background-repeat: no-repeat;
`

export const TopSectionInfo = styled.div`
    text-align: center;
    transform: translateY(-15px);
`

export const TopSectionTitle = styled.h1`
    font-size: 45px;
    font-weight: 700;
    color: #0D1136;
`

export const TopSectionSubTitle = styled.p`
    font-size: 19px;
    color: #77798C;
    margin-top: 15px;
`