import React from 'react'
import { ButtonContainer, ButtonTitle } from './styled'
import { SubmitButtonProps } from './types'

export const SubmitButton = ({ title, onClick, isWide }: SubmitButtonProps) => {
    return (
        <ButtonContainer isWide={isWide} onClick={onClick}>
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonContainer>
    )
}