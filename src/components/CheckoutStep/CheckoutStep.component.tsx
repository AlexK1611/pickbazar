import { FC } from 'react'
import {
    Step,
    StepHeader,
    StepMainInfo,
    StepNumberContainer,
    StepNumber,
    StepName,
    AddButton,
    AddButtonText,
    StepOptions
} from './CheckoutStep.styles'
import { CheckoutStepProps } from './CheckoutStep.types'

export const CheckoutStep: FC<CheckoutStepProps> = ({
    stepNumber,
    stepName,
    stepLabel,
    setFormType,
    children,
    formType
}) => {
    return (
        <Step>
            <StepHeader isAddOption={!!setFormType}>
                <StepMainInfo>
                    <StepNumberContainer>
                        <StepNumber>{stepNumber}</StepNumber>
                    </StepNumberContainer>
                    <StepName>{stepName}</StepName>
                </StepMainInfo>
                {setFormType && (
                    <AddButton onClick={() => setFormType(formType)}> {/** TODO: функция в рендере */}
                        <AddButtonText>+ Add {stepLabel}</AddButtonText>
                    </AddButton>
                )}
            </StepHeader>
            <StepOptions>
                {children}
            </StepOptions>
        </Step>
    )
}