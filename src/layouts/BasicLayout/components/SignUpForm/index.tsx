import React from 'react'
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
} from './styled'
// types
import { SignUpFormProps } from './types'
// helpers
import { signUpValidation, signUpFields } from './helpers'
// common components
import { FormSubtitle } from '../../../../components/FormSubtitle'
import { FormTitle } from '../../../../components/FormTitle'
import { Input } from '../../../../components/Input'
import { SubmitButton } from '../../../../components/SubmitButton'
import { SocialButton } from '../../../../components/SocialButton'
import { UnderlinedText } from '../../../../components/UnderlinedText'
import { FormTooltip } from '../../../../components/FormTooltip'
// icons
import { ReactComponent as FacebookIcon } from '../../../../assets/icons/facebook.svg'
import { ReactComponent as GoogleIcon } from '../../../../assets/icons/google.svg'

export const SignUpForm = ({ switchToLogin }: SignUpFormProps) => {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'all',
        resolver: yupResolver(signUpValidation)
    })
    const onSubmit = (data: any) => console.log(data)

    return (
        <>
            <FormTitle title='Sign Up'/>
            <FormSubtitle subtitle='Welcome!'/>
            <Form>
                {signUpFields.map(field => (
                    <FormFieldContainer key={`signUp-${field.name}`}>
                        <Input
                            {...register(field.name)}
                            placeholder={field.placeholder}
                            type={field.type}
                            onChange={(event: { target: HTMLInputElement }) => setValue(field.name, event.target.value)}
                            ref={null}
                        />
                        {errors[field.name] && <FormTooltip text={`${field.label} is required`}/>}
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