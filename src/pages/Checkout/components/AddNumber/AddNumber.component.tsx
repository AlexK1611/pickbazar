import { FC } from 'react'

// libraries
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// styled components
import { Form, Title } from './AddNumber.styles'

// components
import { FormField } from 'components/FormField/FormField.component'
import { SubmitButton } from 'components/SubmitButton/SubmitButton.component'

// types
import { NumberData } from './AddNumber.types'

// helpers
import { numberValidation } from './AddNumber.helpers'

export const AddNumber: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<NumberData>({
        mode: 'all',
        resolver: yupResolver(numberValidation)
    })
    const onSubmit = (data: NumberData) => {
        console.log('number added')
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Title>Add New Number</Title>
                <FormField
                    {...register('title')}
                    placeholder='Enter title'
                    type='text'
                    error={errors.title?.message}
                />
                <FormField
                    {...register('number')}
                    placeholder='Enter number'
                    type='text'
                    error={errors.number?.message}
                />
                <SubmitButton isWide title='Save Number' />
            </Form>
        </>
    )
}