import React, { FC } from 'react'
import {
    FieldContainer,
    FieldInput,
    FieldTooltip,
    FieldTooltipText
} from './FormField.styles'
import { FormFieldProps } from './FormField.types'

export const FormField: FC<FormFieldProps> = ({
    placeholder,
    type,
    ref,
    error,
    ...rest
}) => {
    return (
        <FieldContainer>
            <FieldInput
                placeholder={placeholder}
                type={type}
                ref={ref}
                {...rest}
            />
            {error && (
                <FieldTooltip>
                    <FieldTooltipText>{error}</FieldTooltipText>
                </FieldTooltip>
            )}
        </FieldContainer>
    )
}