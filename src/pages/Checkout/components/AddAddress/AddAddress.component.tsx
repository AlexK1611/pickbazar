import { FC } from 'react'

// libraries
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// styled components
import { Title, Form } from './AddAddress.styles'

// components
import { FormField } from 'components/FormField/FormField.component'
import { FormTextarea } from 'components/FormTextarea/FormTextarea.component'
import { SubmitButton } from 'components/SubmitButton/SubmitButton.component'

// types
import { AddressData } from './AddAddress.types'

// helpers
import { addressValidation } from './AddAddress.helpers'

export const AddAddress: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<AddressData>({
        mode: 'all',
        resolver: yupResolver(addressValidation)
    })
    const onSubmit = (data: AddressData) => {
        console.log('address added')
    }

    return (
        <>
            <Title>Add New Address</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormField
                    {...register('title')}
                    placeholder='Enter title'
                    type='text'
                    error={errors.title?.message}
                />
                <FormTextarea
                    {...register('description')}
                    placeholder='Enter description'
                    error={errors.description?.message}
                />
                <SubmitButton isWide title='Save Address' />
            </Form>
        </>
    )
}