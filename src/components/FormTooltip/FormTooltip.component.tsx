import React, { FC } from 'react'
import { TooltipContainer, TooltipText } from './FormTooltip.styles'
import { TooltipProps } from './FormTooltip.types'

export const FormTooltip: FC<TooltipProps> = ({ text }) => {
    return (
        <TooltipContainer>
            <TooltipText>{text}</TooltipText>
        </TooltipContainer>
    )
}