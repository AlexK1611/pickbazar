import styled from 'styled-components'

export const FieldContainer = styled.div`
    position: relative;
    margin-top: 10px;
    &:first-child {
        margin-top: 0;
    }
`

export const FieldInput = styled.input`
    width: 100%;
    padding: 15px;
    border: 1px solid #F1F1F1;
    border-radius: 6px;
    background-color: #F7F7F7;
    &:focus {
        border-color: #009E7F;
    }
`

export const FieldTooltip = styled.div`
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    width: 175px;
    padding: 10px 0;
    border-radius: 6px;
    background-color: #000;
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 100%;
        transform: translateY(-50%);
        border-width: 5px;
        border-style: solid;
        border-color: transparent black transparent transparent;
    }
`

export const FieldTooltipText = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: #FFF;
    text-align: center;
`