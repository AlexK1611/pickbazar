import React from 'react'
import { SubtitleComponent } from './styled'
import { FormSubtitleProps } from './types'

export const FormSubtitle = ({ subtitle }: FormSubtitleProps) => {
    return (
        <SubtitleComponent>{subtitle}</SubtitleComponent>
    )
}