import { FC, useState, useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { removeAuthMessage } from 'redux/auth/actions'
import { getAuthMessage, getUser } from 'redux/auth/selectors'

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
import { RootReducer } from 'redux/rootReducer'

// reusable components
import { Toast } from 'components/Toast/Toast.component'
import { SubmitButton } from 'components/SubmitButton/SubmitButton.component'
import { AuthModal } from './components/AuthModal/AuthModal.component'
import { ProfileMenu } from './components/ProfileMenu/ProfileMenu.component'

// icons
import { ReactComponent as Logo } from 'assets/images/logo.svg'

export const AppLayout: FC = ({ children }) => {
    const user = useSelector(
        (state: RootReducer) => getUser(state)
    )
    const authMessage = useSelector(
        (state: RootReducer) => getAuthMessage(state)
    )
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

    const [isProfileMenu, handleProfileMenu] = useState(false)
    useEffect(() => {
        if (user === null) {
            handleProfileMenu(false)
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
                        <UserProfilePic onClick={() => handleProfileMenu(!isProfileMenu)}/>
                        <ProfileMenu isMenu={isProfileMenu}/>
                    </ProfileMenuContainer>
                ) : (
                    <SubmitButton title='Join' onClick={() => handleAuthModal(true)} />
                )}
            </Header>
            <Content>{children}</Content>
        </LayoutContainer>
    )
}