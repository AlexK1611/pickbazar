import { FC } from 'react'

// redux
import { useDispatch } from 'react-redux'
import { signUpRequest } from 'redux/auth/actions'

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
import { SignUpData } from 'redux/auth/types'

// helpers
import { signUpValidation, signUpFields } from './SignUp.helpers'

// reusable components
import { FormField } from 'components/FormField/FormField.component'
import { SubmitButton } from 'components/SubmitButton/SubmitButton.component'
import { SocialButton } from 'components/SocialButton/SocialButton.component'
import { UnderlinedText } from 'components/UnderlinedText/UnderlinedText.component'

// icons
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg'
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg'

export const SignUp: FC<SignUpProps> = ({ switchToLogin }) => {
    const dispatch = useDispatch()
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'all',
        resolver: yupResolver(signUpValidation)
    })
    const onSubmit = (data: SignUpData) => {
        dispatch(signUpRequest(data))
    }

    return (
        <>
            <Title>Sign Up</Title>
            <Subtitle>Welcome!</Subtitle>
            <Form>
                {signUpFields.map(field => (
                    <FormField
                        key={`signUp-${field.name}`}
                        {...register(field.name, {
                            onChange: event => setValue(field.name, event.target.value)
                        })}
                        placeholder={field.placeholder}
                        type={field.type}
                        ref={null}
                        error={errors?.[field.name]?.message}
                    />
                ))}
                <TermsAndConditions>
                    By signing up, you agree to Pickbazar's
                    <UnderlinedText
                        text='Terms & Condtion'
                        color='#4286F4'
                        fontSize='13px'
                    />
                </TermsAndConditions>
                <SubmitButton
                    isWide
                    title='Submit'
                    onClick={handleSubmit(onSubmit)}
                />
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
                />
            </SocialButtons>
            <LoginProposal>
                Already have an account?
                <UnderlinedText
                    text='Login'
                    color='#009E7F'
                    fontSize='15px'
                    onClick={switchToLogin}
                />
            </LoginProposal>
        </>
    )
}