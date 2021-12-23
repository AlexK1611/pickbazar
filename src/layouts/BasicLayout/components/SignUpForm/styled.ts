import styled from 'styled-components'

export const Form = styled.form`
    margin-top: 30px;
`

export const FormFieldContainer = styled.div`
    position: relative;
    margin-top: 10px;
    &:first-child {
        margin-top: 0;
    }
`

export const TermsAndConditions = styled.p`
    font-size: 13px;
    font-weight: 700;
    color: #77798C;
    text-align: center;
    margin-top: 30px;
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

export const LoginProposal = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: #0D1136;
    text-align: center;
    margin-top: 20px;
`