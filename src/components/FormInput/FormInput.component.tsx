import React from 'react'
import { InputComponent } from './FormInput.styles'
import { FormInputProps } from './FormInput.types'

export const FormInput = ({
    placeholder,
    type,
    onChange,
    ref,
    ...rest
}: FormInputProps) => {
    return (
        <InputComponent
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            ref={ref}
            {...rest}
        />
    )
}