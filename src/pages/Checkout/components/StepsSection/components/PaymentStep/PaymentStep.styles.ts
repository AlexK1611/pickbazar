import styled from 'styled-components'

export const StepOptions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 15px;
    &:last-child {
        margin-top: 15px;
    }
`

export const StepInfo = styled.p`
    margin-top: 30px;
    font-size: 13px;
    font-weight: 400;
    color: #77798C;
`

export const TermsAndConditions = styled.span`
    margin-left: 3px;
    color: #FF5B60;
`