import { FC } from 'react'

// redux
import { useDispatch } from 'react-redux'
import { signUpRequest } from 'store/auth/actions'

// libraries
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// styled components
import {
    Form,
    Title,
    Subtitle,
    TermsAndConditions,
    Splitter,
    SplitterLine,
    SplitterText,
    SocialButtons,
    LoginProposal
} from './SignUp.styled'

// types
import { SignUpProps } from './SignUp.types'
import { SignUpData } from 'store/auth/types'
import { AuthFormTypes } from '../AuthModal/AuthModal.types'

// helpers
import { signUpValidation } from './SignUp.helpers'

// reusable components
import { FormField } from 'components/FormField/FormField.component'
import { SubmitButton } from 'components/SubmitButton/SubmitButton.component'
import { SocialButton } from 'components/SocialButton/SocialButton.component'
import { UnderlinedText } from 'components/UnderlinedText/UnderlinedText.component'

// icons
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg'

export const SignUp: FC<SignUpProps> = ({ setFormType }) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpData>({
        resolver: yupResolver(signUpValidation)
    })
    const onSubmit = (data: SignUpData) => {
        dispatch(signUpRequest(data))
    }

    return (
        <>
            <Title>Sign Up</Title>
            <Subtitle>Welcome!</Subtitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormField
                    {...register('username')}
                    placeholder='Your username'
                    type='text'
                    error={errors.username?.message}
                />
                <FormField
                    {...register('email')}
                    placeholder='Your email'
                    type='text'
                    error={errors.email?.message}
                />
                <FormField
                    {...register('password')}
                    placeholder='Your password'
                    type='password'
                    error={errors.password?.message}
                />
                <FormField
                    {...register('confirmPassword')}
                    placeholder='Confirm password'
                    type='password'
                    error={errors.confirmPassword?.message}
                />
                <TermsAndConditions>
                    By signing up, you agree to Pickbazar's
                    <UnderlinedText color='#4286F4' fontSize='13px'>
                        Terms & Condtion
                    </UnderlinedText>
                </TermsAndConditions>
                <SubmitButton isWide title='Submit' />
            </Form>
            <Splitter>
                <SplitterLine/>
                <SplitterText>Or</SplitterText>
            </Splitter>
            <SocialButtons>
                <SocialButton
                    icon={<GoogleIcon/>}
                    bgColor='#4286F4'
                    title='Continue With Google'
                    provider='google'
                />
            </SocialButtons>
            <LoginProposal>
                Already have an account?
                <UnderlinedText
                    color='#009E7F'
                    fontSize='15px'
                    onClick={() => setFormType(AuthFormTypes.LOGIN)} /** TODO: функция в рендере */
                >
                    Login
                </UnderlinedText>
            </LoginProposal>
        </>
    )
}