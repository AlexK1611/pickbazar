import * as yup from 'yup'

export const signUpValidation = yup.object({
    username: yup
        .string()
        .required('Username is required'),
    email: yup
        .string()
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'At least 6 charachters'),
    confirmPassword: yup
        .string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('password')], 'Passwords must match')
})

export const signUpFields = [
    {
        name: 'username',
        placeholder: 'Your username',
        type: 'text'
    },
    {
        name: 'email',
        placeholder: 'Your email',
        type: 'text'
    },
    {
        name: 'password',
        placeholder: 'Your password',
        type: 'password'
    },
    {
        name: 'confirmPassword',
        placeholder: 'Confirm password',
        type: 'password'
    }
]