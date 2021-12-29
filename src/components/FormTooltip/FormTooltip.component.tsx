import React from 'react'
import { TooltipContainer, TooltipText } from './FormTooltip.styles'
import { TooltipProps } from './FormTooltip.types'

export const FormTooltip = ({ text }: TooltipProps) => {
    return (
        <TooltipContainer>
            <TooltipText>{text}</TooltipText>
        </TooltipContainer>
    )
}