import styled from 'styled-components'

export const TooltipContainer = styled.div`
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

export const TooltipText = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: #FFF;
    text-align: center;
`