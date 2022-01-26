import { FC, useState, useEffect } from 'react'

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

    useEffect(() => {
        if (authMessage !== null) {
            setTimeout(() => dispatch(removeAuthMessage()), 3000)
        }
    }, [authMessage])

    {/** TODO: по неймнгу и внутренностям вообще не понятно за что стейт отвечает */ }
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
                handleAuthModal={handleAuthModal}
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
                        {/** TODO: функция в рендере  */ }
                        <UserProfilePic onClick={() => handleProfileMenu(!isProfileMenu)}/>
                        <ProfileMenu isMenu={isProfileMenu}/>
                    </ProfileMenuContainer>
                ) : (
                    <SubmitButton title='Join' onClick={() => handleAuthModal(true)} /> /** TODO: функция в рендере  */
                )}
            </Header>
            <Content>{children}</Content>
        </LayoutContainer>
    )
}