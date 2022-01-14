import * as yup from 'yup'

export const addressValidation = yup.object({
    title: yup
        .string()
        .required('Title is required'),
    description: yup
        .string()
        .required('Description is required')
})