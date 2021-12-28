import React from 'react'
import { useDispatch } from 'react-redux'
import { signOutRequest } from '../../../../redux/auth/actions'
import { OptionItem, OptionItemText, OptionsList } from './styled'
import { ProfileDropdownProps } from './types'

export const ProfileDropdown = ({ isDropdown }: ProfileDropdownProps ) => {
    const dispatch = useDispatch()
    if (!isDropdown) return null

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