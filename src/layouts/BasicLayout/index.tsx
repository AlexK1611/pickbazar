import React, { FC, useState } from 'react'
import {
    LayoutContainer,
    Header,
    HeaderItemsGroup,
    SearchInputContainer,
    SearchInputIcon,
    SearchInput,
    Content
} from './styled'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { SubmitButton } from '../../components/SubmitButton'
import { AuthModal } from './components/AuthModal'

export const BasicLayout: FC = ({ children }) => {
    const [isAuthModal, handleAuthModal] = useState(false)
    return (
        <LayoutContainer>
            {isAuthModal && (
                <AuthModal
                    isModal={isAuthModal}
                    closeModal={() => handleAuthModal(false)}
                />
            )}
            <Header>
                <HeaderItemsGroup>
                    <Logo />
                    <SearchInputContainer>
                        <SearchInputIcon />
                        <SearchInput />
                    </SearchInputContainer>
                </HeaderItemsGroup>
                <SubmitButton
                    title='Join'
                    onClick={() => handleAuthModal(true)}
                />
            </Header>
            <Content>{children}</Content>
        </LayoutContainer>
    )
}