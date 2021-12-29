import React, { FC } from 'react'
import { TitleComponent } from './FormTitle.styles'
import { FormTitleProps } from './FormTitle.types'

export const FormTitle: FC<FormTitleProps> = ({ title }) => {
    return (
        <TitleComponent>{title}</TitleComponent>
    )
}