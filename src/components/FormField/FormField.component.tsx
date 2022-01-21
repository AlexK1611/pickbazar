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
                    /*
                        изначально react-hook-form выдавала ошибку связанную с forwadRef.
                        мне оставалось либо задать ref null, либо сделать переиспользуемое
                        поле forwardRef'ом, что либа регистрировала поля и экшны срабатывали
                    */
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