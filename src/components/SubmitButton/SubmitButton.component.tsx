import { FC } from 'react'
import { ButtonContainer, ButtonTitle } from './SubmitButton.styles'
import { SubmitButtonProps } from './SubmitButton.types'

export const SubmitButton: FC<SubmitButtonProps> = ({
    title,
    onClick,
    isWide,
    disabled
}) => {
    return (
        <ButtonContainer
            isWide={isWide}
            onClick={onClick}
            disabled={disabled}
        >
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonContainer>
    )
}