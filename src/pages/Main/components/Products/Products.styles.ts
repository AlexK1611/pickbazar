import styled from 'styled-components'

export const ProductsSectionContainer = styled.section`
    display: grid;
    grid-template-columns: 300px calc(100% - 300px);
`

export const CategoriesSection = styled.div`
    padding: 50px 0 50px 50px;
    background-color: #FFF;
`

export const ProductsSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 41vw;
    padding: 20px;
    background-color: #F7F7F7;
    overflow-y: auto;
    overflow-x: hidden;
`

export const ProductsMessage = styled.h2`
    font-size: 21px;
    font-weight: 700;
    color: #009E7F;
`

export const LoadMoreBtn = styled.button`
    margin-top: 20px;
    padding: 10px 30px;
    border: 1px solid #F7F7F7;
    border-radius: 6px;
    background-color: #FFF;
`

export const LoadMoreBtnTitle = styled.p`
    font-size: 14;
    font-weight: 700;
    color: #009E7F;
`