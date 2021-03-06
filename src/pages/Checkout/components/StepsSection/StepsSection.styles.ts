import styled from 'styled-components'

export const CheckoutSteps = styled.div`
    margin-right: 25px;
`

export const StepOptions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 15px;
    &:last-child {
        margin-top: 15px;
    }
`