import React from 'react'
import { TextComponent } from './styled'
import { UnderlinedTextProps } from './types'

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