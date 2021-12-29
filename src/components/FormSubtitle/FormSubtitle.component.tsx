import React, { FC } from 'react'
import { SubtitleComponent } from './FormSubtitle.styles'
import { FormSubtitleProps } from './FormSubtitle.types'

export const FormSubtitle: FC<FormSubtitleProps> = ({ subtitle }) => {
    return (
        <SubtitleComponent>{subtitle}</SubtitleComponent>
    )
}