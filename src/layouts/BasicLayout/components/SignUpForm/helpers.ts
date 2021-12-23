import * as yup from 'yup'

export const signUpValidation = yup.object({
    username: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required()
})

export const signUpFields = [
    {
        name: 'username',
        label: 'Username',
        placeholder: 'Your username',
        type: 'text'
    },
    {
        name: 'email',
        label: 'Email',
        placeholder: 'Your email',
        type: 'text'
    },
    {
        name: 'password',
        label: 'Password',
        placeholder: 'Your password',
        type: 'password'
    },
    {
        name: 'confirmPassword',
        label: 'Password',
        placeholder: 'Confirm password',
        type: 'password'
    }
]