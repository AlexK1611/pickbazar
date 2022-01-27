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
    width: 460px;
    padding: 40px 60px;
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

export const Form = styled.form`
    margin-top: 30px;
`

export const Title = styled.h2`
    font-size: 21px;
    font-weight: 700;
    color: #009E7F;
    text-align: center;
`

export const Subtitle = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: #77798C;
    text-align: center;
    margin-top: 10px;
`

export const Splitter = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 25px;
`

export const SplitterLine = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    background-color: #F1F1F1;
`

export const SplitterText = styled.p`
    position: relative;
    font-size: 15px;
    font-weight: 400;
    color: #0D1136;
    width: 24px;
    padding: 0 5px;
    background-color: #FFF;
`

export const SocialButtons = styled.div`
    margin-top: 15px;
`

export const FormSwitcher = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: #0D1136;
    text-align: center;
    margin-top: 20px;
`