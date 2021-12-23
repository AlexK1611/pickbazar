import React from 'react'
import { TooltipContainer, TooltipText } from './styled'
import { TooltipProps } from './types'

export const FormTooltip = ({ text }: TooltipProps) => {
    return (
        <TooltipContainer>
            <TooltipText>{text}</TooltipText>
        </TooltipContainer>
    )
}