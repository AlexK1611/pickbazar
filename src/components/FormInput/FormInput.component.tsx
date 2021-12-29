import React, { FC } from 'react'
import { InputComponent } from './FormInput.styles'
import { FormInputProps } from './FormInput.types'

export const FormInput: FC<FormInputProps> = ({
    placeholder,
    type,
    onChange,
    ref,
    ...rest
}) => {
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