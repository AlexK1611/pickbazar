import React, { FC } from 'react'
import { ButtonContainer, ButtonTitle } from './SubmitButton.styles'
import { SubmitButtonProps } from './SubmitButton.types'

export const SubmitButton: FC<SubmitButtonProps> = ({ title, onClick, isWide }) => {
    return (
        <ButtonContainer isWide={isWide} onClick={onClick}>
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonContainer>
    )
}