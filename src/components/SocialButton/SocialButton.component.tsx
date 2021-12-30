import { FC } from 'react'
import { ButtonContainer, ButtonTitle } from './SocialButton.styles'
import { SocialButtonProps } from './SocialButton.types'

export const SocialButton: FC<SocialButtonProps> = ({ icon, bgColor, title }) => {
    return (
        <ButtonContainer bgColor={bgColor}>
            {icon}
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonContainer>
    )
}