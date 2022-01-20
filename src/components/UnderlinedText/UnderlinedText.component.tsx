import { FC } from 'react'
import { TextComponent } from './UnderlinedText.styles'
import { UnderlinedTextProps } from './UnderlinedText.types'

// TODO: а почему ты не children используешь, а text ?
export const UnderlinedText: FC<UnderlinedTextProps> = ({
    text,
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
            {text}
        </TextComponent>
    )
}