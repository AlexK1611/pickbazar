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
} from './SignIn.styles'
// types
import { SignInProps } from './SignIn.types'
// helpers
import { signInValidation, signInFields } from './SignIn.helpers'
// common components
import { FormSubtitle } from '../../../../components/FormSubtitle/FormSubtitle.component'
import { FormTitle } from '../../../../components/FormTitle/FormTitle.component'
import { FormInput } from '../../../../components/FormInput/FormInput.component'
import { SubmitButton } from '../../../../components/SubmitButton/SubmitButton.component'
import { SocialButton } from '../../../../components/SocialButton/SocialButton.component'
import { FormTooltip } from '../../../../components/FormTooltip/FormTooltip.component'
import { UnderlinedText } from '../../../../components/UnderlinedText/UnderlinedText.component'
// icons
import { ReactComponent as FacebookIcon } from '../../../../assets/icons/facebook.svg'
import { ReactComponent as GoogleIcon } from '../../../../assets/icons/google.svg'

export const SignIn = ({ switchToRegister }: SignInProps) => {
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
                    text='Register'
                    color='#009E7F'
                    fontSize='15px'
                    onClick={switchToRegister}
                />
            </RegisterProposal>
        </>
    )
}