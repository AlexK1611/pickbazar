import { FC } from 'react'
import { TextComponent } from './UnderlinedText.styles'
import { UnderlinedTextProps } from './UnderlinedText.types'

export const UnderlinedText: FC<UnderlinedTextProps> = ({
    children,
    onClick,
    color,
    fontSize
}) => {
    return (
        <TextComponent
            color={color}
            fontSize={fontSize}
            onClick={onClick}
        >
            {children}
        </TextComponent>
    )
}