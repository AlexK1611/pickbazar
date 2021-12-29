import React from 'react'
import { ButtonContainer, ButtonTitle } from './SocialButton.styles'
import { SocialButtonProps } from './SocialButton.types'

export const SocialButton = ({ icon, bgColor, title }: SocialButtonProps) => {
    return (
        <ButtonContainer bgColor={bgColor}>
            {icon}
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonContainer>
    )
}