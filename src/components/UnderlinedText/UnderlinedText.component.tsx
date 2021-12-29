import React from 'react'
import { TextComponent } from './UnderlinedText.styles'
import { UnderlinedTextProps } from './UnderlinedText.types'

export const UnderlinedText = ({
    text,
    onClick,
    color,
    fontSize
}: UnderlinedTextProps) => {
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