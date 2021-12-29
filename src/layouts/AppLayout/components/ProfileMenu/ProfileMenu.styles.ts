import styled from 'styled-components'

export const OptionsList = styled.ul`
    position: absolute;
    top: 50px;
    right: 0;
    padding: 15px 0;
    box-shadow: 0px 3px 20px rgba(142, 142, 142, 0.14);
    border-radius: 6px;
    background-color: #FFF;
`

export const OptionItem = styled.li`
    list-style: none;
    width: 200px;
    padding: 15px 30px;
    border-bottom: 1px solid #E5E5E5;
    cursor: pointer;
    &:last-child {
        border-bottom: none;
    }
`

export const OptionItemText = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: #0D1136;
`