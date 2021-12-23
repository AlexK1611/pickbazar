import React from 'react'
import { TitleComponent } from './styled'
import { FormTitleProps } from './types'

export const FormTitle = ({ title }: FormTitleProps) => {
    return (
        <TitleComponent>{title}</TitleComponent>
    )
}