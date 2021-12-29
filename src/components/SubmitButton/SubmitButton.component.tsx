import React from 'react'
import { ButtonContainer, ButtonTitle } from './SubmitButton.styles'
import { SubmitButtonProps } from './SubmitButton.types'

export const SubmitButton = ({ title, onClick, isWide }: SubmitButtonProps) => {
    return (
        <ButtonContainer isWide={isWide} onClick={onClick}>
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonContainer>
    )
}