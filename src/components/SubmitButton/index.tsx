import React from 'react'
import { ButtonContainer, ButtonTitle } from './styled'
import { SubmitButtonProps } from './types'

export const SubmitButton = ({ title, onClick }: SubmitButtonProps) => {
    return (
        <ButtonContainer onClick={onClick}>
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonContainer>
    )
}