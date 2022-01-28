import styled from 'styled-components'
import { ReactComponent as CloseSvg } from 'assets/icons/close.svg'

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
    width: 360px;
    padding: 30px;
    border-radius: 6px;
    background-color: #FFF;
`

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 10px;
    height: 10px;
    background-color: transparent;
`

export const CloseIcon = styled(CloseSvg)`
    fill: rgba(0, 0, 0, 0.25);
`

export const FormTitle = styled.h2`
    font-size: 19px;
    font-weight: 700;
    color: #0D1136;
`

export const Form = styled.form`
    margin-top: 15px;
`