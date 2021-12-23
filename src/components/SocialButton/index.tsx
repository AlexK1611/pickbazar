import React from 'react'
import { ButtonContainer, ButtonTitle } from './styled'
import { SocialButtonProps } from './types'

export const SocialButton = ({ icon, bgColor, title }: SocialButtonProps) => {
    return (
        <ButtonContainer bgColor={bgColor}>
            {icon}
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonContainer>
    )
}