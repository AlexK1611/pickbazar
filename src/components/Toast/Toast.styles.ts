import styled from 'styled-components'

export const ToastComponent = styled.div`
    position: fixed;
    z-index: 200;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    box-shadow: 0px 3px 20px rgba(142, 142, 142, 0.5);
    border-radius: 6px;
    background-color: #FFF;
`

export const ToastMessage = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: #000;
`