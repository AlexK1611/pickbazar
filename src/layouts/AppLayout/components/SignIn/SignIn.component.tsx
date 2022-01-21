import { FC } from 'react'

// redux
import { useDispatch } from 'react-redux'
import { signInRequest } from 'redux/auth/actions'

// libraries
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// styled components
import {
    Form,
    Title,
    Subtitle,
    Splitter,
    SplitterLine,
    SplitterText,
    SocialButtons,
    RegisterProposal
} from './SignIn.styles'

// types
import { SignInProps } from './SignIn.types'
import { SignInData } from 'redux/auth/types'

// helpers
import { signInValidation } from './SignIn.helpers'

// reusable components
import { FormField } from 'components/FormField/FormField.component'
import { SubmitButton } from 'components/SubmitButton/SubmitButton.component'
import { SocialButton } from 'components/SocialButton/SocialButton.component'
import { UnderlinedText } from 'components/UnderlinedText/UnderlinedText.component'

// icons
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg'
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg'

export const SignIn: FC<SignInProps> = ({ switchToRegister }) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm<SignInData>({
        mode: 'all',
        resolver: yupResolver(signInValidation)
    })
    const onSubmit = (data: SignInData) => {
        dispatch(signInRequest(data))
    }

    return (
        <>
            <Title>Welcome Back</Title>
            <Subtitle>Login with your email & password</Subtitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormField
                    {...register('identifier')}
                    placeholder='Your email'
                    type='text'
                    error={errors.identifier?.message}
                />
                <FormField
                    {...register('password')}
                    placeholder='Your password'
                    type='password'
                    error={errors.password?.message}
                />
                <SubmitButton isWide title='Submit' />
            </Form>
            <Splitter>
                <SplitterLine/>
                <SplitterText>Or</SplitterText>
            </Splitter>
            <SocialButtons>
                <SocialButton
                    icon={<FacebookIcon/>}
                    bgColor='#4267B2'
                    title='Continue with Facebook'
                />
                <SocialButton
                    icon={<GoogleIcon/>}
                    bgColor='#4286F4'
                    title='Continue With Google'
                    href={`${process.env.REACT_APP_HOST}/connect/google`}
                />
            </SocialButtons>
            <RegisterProposal>
                Do not have account yet? 
                <UnderlinedText
                    color='#009E7F'
                    fontSize='15px'
                    onClick={switchToRegister}
                >
                    Register
                </UnderlinedText>
            </RegisterProposal>
        </>
    )
}