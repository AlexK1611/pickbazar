import { FC } from 'react'

// redux
import { useDispatch } from 'react-redux'
import { editAddress } from 'store/checkout/actions'

// libraries
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// styled components
import { FormTitle, Form } from '../CheckoutModal/CheckoutModal.styles'

// components
import { FormField } from 'components/FormField/FormField.component'
import { FormTextarea } from 'components/FormTextarea/FormTextarea.component'
import { SubmitButton } from 'components/SubmitButton/SubmitButton.component'

// types
import { EditAddressProps } from './EditAddress.types'
import { AddressData } from './EditAddress.types'

// helpers
import { addressValidation } from './EditAddress.helpers'
import { editFormButtonChecker } from 'pages/Checkout/Checkout.helpers'

export const EditAddress: FC<EditAddressProps> = ({
    closeModal,
    dataToEdit
}) => {
    const dispatch = useDispatch()
    const { register, getValues, handleSubmit, formState: { errors } } = useForm<AddressData>({
        mode: 'all',
        resolver: yupResolver(addressValidation)
    })
    const formValues = getValues()
    const onSubmit = (data: AddressData) => {
        const fullData = { ...data, id: dataToEdit.id }
        dispatch(editAddress(fullData))
        closeModal()
    }

    const isButtonDisabled = editFormButtonChecker(
        formValues.title,
        dataToEdit.title,
        formValues.description,
        dataToEdit.description
    )

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormTitle>Edit Delivery Address</FormTitle>
                <FormField
                    { ...register('title', { value: dataToEdit.title }) }
                    placeholder='Edit title'
                    type='text'
                    error={errors.title?.message}
                />
                <FormTextarea
                    { ...register('description', { value: dataToEdit.description }) }
                    placeholder='Edit description'
                    error={errors.description?.message}
                />
                <SubmitButton
                    isWide
                    title='Edit Address'
                    disabled={isButtonDisabled}
                />
            </Form>
        </>
    )
}