import * as yup from 'yup'

export const signUpValidation = yup.object({
    username: yup
        .string()
        .required('Username is required'),
    email: yup
        .string()
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/, 'Wrong email format')
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