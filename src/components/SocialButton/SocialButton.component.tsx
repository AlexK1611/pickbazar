import { FC } from 'react'
import { ButtonContainer, ButtonTitle } from './SocialButton.styles'
import { SocialButtonProps } from './SocialButton.types'

export const SocialButton: FC<SocialButtonProps> = ({ icon, bgColor, title, href }) => {
    return (
        <ButtonContainer bgColor={bgColor} href={href}>
            {icon}
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonContainer>
    )
}