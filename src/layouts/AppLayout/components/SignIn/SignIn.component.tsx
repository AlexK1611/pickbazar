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
import { signInValidation, signInFields } from './SignIn.helpers'

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
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({
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
            <Form>
                {signInFields.map(field => (
                    <FormField
                        key={`signIn-${field.name}`}
                        {...register(field.name, {
                            onChange: event => setValue(field.name, event.target.value)
                        })}
                        placeholder={field.placeholder}
                        type={field.type}
                        ref={null}
                        error={errors?.[field.name]?.message}
                    />
                ))}
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
            <RegisterProposal>
                Do not have account yet? 
                <UnderlinedText
                    text='Register'
                    color='#009E7F'
                    fontSize='15px'
                    onClick={switchToRegister}
                />
            </RegisterProposal>
        </>
    )
}