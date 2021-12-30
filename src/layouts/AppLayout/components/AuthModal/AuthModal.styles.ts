import styled from 'styled-components'

export const ModalBackground = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContent = styled.div`
    position: relative;
    width: 460px;
    padding: 40px 60px;
    border-radius: 6px;
    background-color: #FFF;
`

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 11px;
    height: 10px;
    background-color: transparent;
`