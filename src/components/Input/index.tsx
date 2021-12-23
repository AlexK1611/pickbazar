import React from 'react'
import { InputComponent } from './styled'
import { InputProps } from './types'

export const Input = ({
    placeholder,
    type,
    onChange,
    ref,
    ...rest
}: InputProps) => {
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