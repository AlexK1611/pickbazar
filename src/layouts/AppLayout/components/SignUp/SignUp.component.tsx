import React from 'react'
// redux
import { useDispatch } from 'react-redux'
import { signUpRequest } from '../../../../redux/auth/actions'
// libraries
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// styled
import {
    Form,
    FormFieldContainer,
    TermsAndConditions,
    Splitter,
    SplitterLine,
    SplitterText,
    SocialButtons,
    LoginProposal
} from './SignUp.styled'
// types
import { SignUpProps } from './SignUp.types'
// helpers
import { signUpValidation, signUpFields } from './SignUp.helpers'
// common components
import { FormSubtitle } from '../../../../components/FormSubtitle/FormSubtitle.component'
import { FormTitle } from '../../../../components/FormTitle/FormTitle.component'
import { FormInput } from '../../../../components/FormInput/FormInput.component'
import { SubmitButton } from '../../../../components/SubmitButton/SubmitButton.component'
import { SocialButton } from '../../../../components/SocialButton/SocialButton.component'
import { UnderlinedText } from '../../../../components/UnderlinedText/UnderlinedText.component'
import { FormTooltip } from '../../../../components/FormTooltip/FormTooltip.component'
// icons
import { ReactComponent as FacebookIcon } from '../../../../assets/icons/facebook.svg'
import { ReactComponent as GoogleIcon } from '../../../../assets/icons/google.svg'

export const SignUp = ({ switchToLogin }: SignUpProps) => {
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
    const onSubmit = (data: { [key: string]: string }) => {
        dispatch(signUpRequest(data))
    }

    return (
        <>
            <FormTitle title='Sign Up'/>
            <FormSubtitle subtitle='Welcome!'/>
            <Form>
                {signUpFields.map(field => (
                    <FormFieldContainer key={`signUp-${field.name}`}>
                        <FormInput
                            {...register(field.name)}
                            placeholder={field.placeholder}
                            type={field.type}
                            onChange={(event: { target: HTMLInputElement }) => setValue(field.name, event.target.value)}
                            ref={null}
                        />
                        {errors[field.name] && <FormTooltip text={errors[field.name].message}/>}
                    </FormFieldContainer>
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
                    isWide={true}
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