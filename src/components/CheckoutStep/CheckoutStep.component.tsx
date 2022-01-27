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
    formTypeHandler,
    children
}) => {
    return (
        <Step>
            <StepHeader isAddOption={!!formTypeHandler}>
                <StepMainInfo>
                    <StepNumberContainer>
                        <StepNumber>{stepNumber}</StepNumber>
                    </StepNumberContainer>
                    <StepName>{stepName}</StepName>
                </StepMainInfo>
                {formTypeHandler && (
                    <AddButton onClick={formTypeHandler}>
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