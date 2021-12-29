import React from 'react'
import { TitleComponent } from './FormTitle.styles'
import { FormTitleProps } from './FormTitle.types'

export const FormTitle = ({ title }: FormTitleProps) => {
    return (
        <TitleComponent>{title}</TitleComponent>
    )
}