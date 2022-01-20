import { FC } from 'react'

// redux
import { useDispatch } from 'react-redux'
import { editPhoneNumber } from 'redux/checkout/actions'

// libraries
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// styled components
import { Form, Title } from './EditNumber.styles'

// components
import { FormField } from 'components/FormField/FormField.component'
import { SubmitButton } from 'components/SubmitButton/SubmitButton.component'

// types
import { EditNumberProps, NumberData } from './EditNumber.types'

// helpers
import { numberValidation } from './EditNumber.helpers'

export const EditNumber: FC<EditNumberProps> = ({
    closeModal,
    dataToEdit
}) => {
    const dispatch = useDispatch()
    const { register, getValues, handleSubmit, formState: { errors } } = useForm<NumberData>({
        mode: 'all',
        resolver: yupResolver(numberValidation)
    })
    const formValues = getValues()
    const onSubmit = (data: NumberData) => {
        dispatch(editPhoneNumber(data))
        closeModal()
    }
    
    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Title>Edit Number</Title>
                <FormField
                    {...register('title', { value: dataToEdit.title })}
                    placeholder='Edit title'
                    type='text'
                    error={errors.title?.message}
                />
                <FormField
                    {...register('number', { value: dataToEdit.number })}
                    placeholder='Edit number'
                    type='text'
                    error={errors.number?.message}
                />
                <SubmitButton
                    isWide
                    title='Edit Number'
                    disabled={
                        formValues.title === dataToEdit.title ||
                        formValues.number === dataToEdit.number ?
                        true : false
                    }
                />
            </Form>
        </>
    )
}