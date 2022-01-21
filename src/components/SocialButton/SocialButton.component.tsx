import { FC } from 'react'
import { ButtonContainer, ButtonTitle } from './SocialButton.styles'
import { SocialButtonProps } from './SocialButton.types'

export const SocialButton: FC<SocialButtonProps> = ({
    icon,
    bgColor,
    title,
    provider
}) => {
    return (
        <ButtonContainer
            bgColor={bgColor}
            href={`${process.env.REACT_APP_HOST}/connect/${provider}`}
        >
            {icon}
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonContainer>
    )
}