import { forwardRef } from 'react'
import {
    FieldContainer,
    FieldInput,
    FieldTooltip,
    FieldTooltipText
} from './FormField.styles'
import { FormFieldProps } from './FormField.types'

export const FormField = forwardRef<any, FormFieldProps>(
    ({ placeholder, type, error, ...rest }, ref) => {
        return (
            <FieldContainer>
                <FieldInput
                    ref={ref}
                    placeholder={placeholder}
                    type={type}
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
)