import React, { FC } from 'react'
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

export const BasicLayout: FC = ({ children }) => {
    return (
        <LayoutContainer>
            <Header>
                <HeaderItemsGroup>
                    <Logo />
                    <SearchInputContainer>
                        <SearchInputIcon />
                        <SearchInput />
                    </SearchInputContainer>
                </HeaderItemsGroup>
                <SubmitButton title='Join' onClick={() => { }} />
            </Header>
            <Content>{children}</Content>
        </LayoutContainer>
    )
}