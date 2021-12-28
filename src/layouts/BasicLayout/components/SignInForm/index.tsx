import React from 'react'
// redux
import { useDispatch } from 'react-redux'
import { signInRequest } from '../../../../redux/auth/actions'
// libraries
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
// styled
import {
    Form,
    FormFieldContainer,
    Splitter,
    SplitterLine,
    SplitterText,
    SocialButtons,
    RegisterProposal
} from '../SignInForm/styled'
// types
import { SignInFormProps } from './types'
// helpers
import { signInValidation, signInFields } from './helpers'
// common components
import { FormSubtitle } from '../../../../components/FormSubtitle'
import { FormTitle } from '../../../../components/FormTitle'
import { Input } from '../../../../components/Input'
import { SubmitButton } from '../../../../components/SubmitButton'
import { SocialButton } from '../../../../components/SocialButton'
import { FormTooltip } from '../../../../components/FormTooltip'
import { UnderlinedText } from '../../../../components/UnderlinedText'
// icons
import { ReactComponent as FacebookIcon } from '../../../../assets/icons/facebook.svg'
import { ReactComponent as GoogleIcon } from '../../../../assets/icons/google.svg'

export const SignInForm = ({ switchToRegister }: SignInFormProps) => {
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
    const onSubmit = (data: { [key: string]: string }) => {
        dispatch(signInRequest(data))
    }

    return (
        <>
            <FormTitle title='Welcome Back'/>
            <FormSubtitle subtitle='Login with your email & password'/>
            <Form>
                {signInFields.map(field => (
                    <FormFieldContainer key={`signIn-${field.name}`}>
                        <Input
                            {...register(field.name)}
                            placeholder={field.placeholder}
                            type={field.type}
                            onChange={(event: { target: HTMLInputElement }) => setValue(field.name, event.target.value)}
                            ref={null}
                        />
                        {errors[field.name] && <FormTooltip text={errors[field.name].message}/>}
                    </FormFieldContainer>
                    
                ))}
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
            <RegisterProposal>
                Do not have account yet? 
                <UnderlinedText
                    text='Login'
                    color='#009E7F'
                    fontSize='15px'
                    onClick={switchToRegister}
                />
            </RegisterProposal>
        </>
    )
}