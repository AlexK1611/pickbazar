import { forwardRef } from 'react'
import {
    TextareaContainer,
    Textarea,
    TextareaTooltip,
    TextareaTooltipText
} from './FormTextarea.styles'
import { FormTextareaProps } from './FormTextarea.types'

export const FormTextarea = forwardRef<any, FormTextareaProps>(
    ({ placeholder, error, ...rest }, ref) => {
        return (
            <TextareaContainer>
                <Textarea
                    ref={ref}
                    placeholder={placeholder}
                    {...rest}
                    rows={10}
                />
                {error && (
                    <TextareaTooltip>
                        <TextareaTooltipText>{error}</TextareaTooltipText>
                    </TextareaTooltip>
                )}
            </TextareaContainer>
        )
    }
)