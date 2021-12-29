import React from 'react'
import { SubtitleComponent } from './FormSubtitle.styles'
import { FormSubtitleProps } from './FormSubtitle.types'

export const FormSubtitle = ({ subtitle }: FormSubtitleProps) => {
    return (
        <SubtitleComponent>{subtitle}</SubtitleComponent>
    )
}