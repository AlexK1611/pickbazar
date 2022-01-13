import styled from 'styled-components'

export const Step = styled.div`
    margin-bottom: 20px;
    padding: 30px;
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.08);
    background-color: #FFF;
    &:last-child {
        margin-bottom: 0;
    }
`

export const StepHeader = styled.div<{
    isAddOption?: boolean
}>`
    display: flex;
    justify-content: ${props => props.isAddOption ? 'space-between' : 'flex-start'};
    align-items: center;
`

export const StepMainInfo = styled.div`
    display: flex;
    align-items: center;
`

export const StepNumberContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background-color: #009E7F;
    border-radius: 17.5px;
`

export const StepNumber = styled.p`
    font-size: 19px;
    font-weight: 700;
    color: #FFF;
`

export const StepName = styled.p`
    font-size: 19px;
    font-weight: 700;
    color: #0D1136;
    margin-left: 15px;
`

export const AddButton = styled.button`
    padding: 10px;
    background-color: transparent;
`

export const AddButtonText = styled.p`
    font-size: 13px;
    font-weight: 700;
    color: #009E7F;
`

export const StepOptions = styled.div`
    margin-top: 35px;
`