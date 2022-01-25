import * as yup from 'yup'

export const signInValidation = yup.object({
    identifier: yup
        .string()
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/, 'Wrong email format')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'At least 6 charachters')
})