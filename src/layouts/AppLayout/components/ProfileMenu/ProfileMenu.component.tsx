import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { signOutRequest } from 'store/auth/actions'
import { OptionItem, OptionItemText, OptionsList } from './ProfileMenu.styles'
import { ProfileMenuProps } from './ProfileMenu.types'

export const ProfileMenu: FC<ProfileMenuProps> = ({ isProfileMenuOpen }) => {
    const dispatch = useDispatch()
    if (!isProfileMenuOpen) return null

    const profileOptions = [
        {
            title: 'Profile',
            onClick: () => console.log('Profile')
        },
        {
            title: 'Checkout',
            onClick: () => console.log('Checkout')
        },
        {
            title: 'Order',
            onClick: () => console.log('Order')
        },
        {
            title: 'Logout',
            onClick: () => dispatch(signOutRequest())
        }
    ]
    
    return (
        <OptionsList>
            {profileOptions.map(option => (
                <OptionItem key={`user-option-${option.title}`} onClick={option.onClick}>
                    <OptionItemText>{option.title}</OptionItemText>
                </OptionItem>
            ))}
        </OptionsList>
    )
}