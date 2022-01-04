import styled from 'styled-components'

export const ProductsSectionContainer = styled.section`
    display: grid;
    grid-template-columns: 280px calc(100% - 280px);
`

export const CategoriesSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 45px 0;
    background-color: #FFF;
`

export const CategoriesList = styled.ul`
    list-style: none;
`

export const CategoryListItem = styled.li`
    margin-bottom: 12px;
    &:last-child {
        margin-bottom: 0;
    }
`

export const CategoryTitle = styled.p<{
    isSelected?: boolean
}>`
    font-size: 15px;
    font-weight: 700;
    color: ${props => props.isSelected ? '#009E7F' : '#0A3247'};
    cursor: pointer;
`

export const SubCategoriesList = styled.ul`
    list-style: none;
    margin: 12px 0 12px 36px;
`

export const SubCategoryTitle = styled.p`
    position: relative;
    font-size: 13px;
    font-weight: 700;
    color: #77798C;
    cursor: pointer;
    &:before {
        content: '—';
        position: absolute;
        left: -20px;
    }
`

export const ProductsSection = styled.div`
    padding: 30px 20px;
    background-color: #F7F7F7;
`