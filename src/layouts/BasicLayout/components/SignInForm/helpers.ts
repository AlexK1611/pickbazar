import * as yup from 'yup'

export const signInValidation = yup.object({
    identifier: yup
        .string()
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'At least 6 charachters')
})

export const signInFields = [
    {
        name: 'identifier',
        placeholder: 'Your email',
        type: 'text'
    },
    {
        name: 'password',
        placeholder: 'Your password',
        type: 'password'
    }
]