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
                    // TODO: а для чего ref тебе тут нужен?
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