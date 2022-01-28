import { FC, useState, useEffect, useCallback } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { removeAuthMessage } from 'store/auth/actions'
import { getAuthMessage, getUser } from 'store/auth/selectors'

// libraries
import { Link } from 'react-router-dom'

// styled components
import {
    LayoutContainer,
    Header,
    HeaderItemsGroup,
    SearchInputContainer,
    SearchInputIcon,
    SearchInput,
    ProfileMenuContainer,
    UserProfilePic,
    Content
} from './AppLayout.styles'

// types
import { UserItem } from 'store/auth/types'

// reusable components
import { Toast } from 'components/Toast/Toast.component'
import { SubmitButton } from 'components/SubmitButton/SubmitButton.component'
import { AuthModal } from './components/AuthModal/AuthModal.component'
import { ProfileMenu } from './components/ProfileMenu/ProfileMenu.component'

// icons
import { ReactComponent as Logo } from 'assets/images/logo.svg'

export const AppLayout: FC = ({ children }) => {
    const user: UserItem | null = useSelector(getUser)
    const authMessage: string | null = useSelector(getAuthMessage)
    const dispatch = useDispatch()

    const [isAuthModal, handleAuthModal] = useState(false)
    useEffect(() => {
        if (user !== null) {
            handleAuthModal(false)
        }
    }, [user])
    const authModalHandler = useCallback(
        () => handleAuthModal(isAuthModal => !isAuthModal),
        []
    )

    useEffect(() => {
        if (authMessage !== null) {
            setTimeout(() => dispatch(removeAuthMessage()), 3000)
        }
    }, [authMessage])

    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false)
    useEffect(() => {
        if (user === null) {
            setProfileMenuOpen(false)
        }
    }, [user])
    const profileMenuHandler = () => {
        setProfileMenuOpen(isProfileMenuOpen => !isProfileMenuOpen)
    }

    return (
        <LayoutContainer>
            <AuthModal
                isModal={isAuthModal}
                authModalHandler={authModalHandler}
            />
            <Toast
                isToast={authMessage !== null}
                message={authMessage}
            />
            <Header>
                <HeaderItemsGroup>
                    <Link to='/'>
                        <Logo />
                    </Link>
                    <SearchInputContainer>
                        <SearchInputIcon />
                        <SearchInput />
                    </SearchInputContainer>
                </HeaderItemsGroup>
                {user ? (
                    <ProfileMenuContainer>
                        <UserProfilePic onClick={profileMenuHandler}/>
                        <ProfileMenu isProfileMenuOpen={isProfileMenuOpen}/>
                    </ProfileMenuContainer>
                ) : (
                    <SubmitButton title='Join' onClick={authModalHandler} />
                )}
            </Header>
            <Content>{children}</Content>
        </LayoutContainer>
    )
}