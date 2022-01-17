import * as yup from 'yup'

export const numberValidation = yup.object({
    title: yup
        .string()
        .required('Title is required'),
    number: yup
        .string()
        .required('Number is required')
})