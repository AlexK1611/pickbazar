import React, { FC } from 'react'
import { TextComponent } from './UnderlinedText.styles'
import { UnderlinedTextProps } from './UnderlinedText.types'

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