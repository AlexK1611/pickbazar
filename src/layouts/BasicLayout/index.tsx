import React, { FC, useState, useEffect } from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { removeAuthMessage } from '../../redux/auth/actions'
// styled
import {
    LayoutContainer,
    Header,
    HeaderItemsGroup,
    SearchInputContainer,
    SearchInputIcon,
    SearchInput,
    ProfileDropdownContainer,
    UserProfilePic,
    Content
} from './styled'
// components
import { Toast } from '../../components/Toast'
import { SubmitButton } from '../../components/SubmitButton'
import { AuthModal } from './components/AuthModal'
import { ProfileDropdown } from './components/ProfileDropdown'
// icons
import { ReactComponent as Logo } from '../../assets/images/logo.svg'

export const BasicLayout: FC = ({ children }) => {
    const user = useSelector((state: any) => state.auth.user)
    const authMessage = useSelector((state: any) => state.auth.authMessage)
    const dispatch = useDispatch()

    const [isAuthModal, handleAuthModal] = useState(false)
    useEffect(() => {
        if (user !== null) {
            handleAuthModal(false)
        }
    }, [user])

    useEffect(() => {
        if (authMessage !== null) {
            setTimeout(() => dispatch(removeAuthMessage()), 3000)
        }
    }, [authMessage])

    const [isProfileDropdown, handleProfileDropdown] = useState(false)
    useEffect(() => {
        if (user === null) {
            handleProfileDropdown(false)
        }
    }, [user])

    return (
        <LayoutContainer>
            <AuthModal
                isModal={isAuthModal}
                closeModal={() => handleAuthModal(false)}
            />
            <Toast
                isToast={authMessage !== null}
                message={authMessage}
            />
            <Header>
                <HeaderItemsGroup>
                    <Logo />
                    <SearchInputContainer>
                        <SearchInputIcon />
                        <SearchInput />
                    </SearchInputContainer>
                </HeaderItemsGroup>
                {user ? (
                    <ProfileDropdownContainer>
                        <UserProfilePic onClick={() => handleProfileDropdown(!isProfileDropdown)}/>
                        <ProfileDropdown isDropdown={isProfileDropdown}/>
                    </ProfileDropdownContainer>
                ) : (
                    <SubmitButton title='Join' onClick={() => handleAuthModal(true)} />
                )}
            </Header>
            <Content>{children}</Content>
        </LayoutContainer>
    )
}