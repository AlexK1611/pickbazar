import styled from 'styled-components'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'

export const LayoutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 60px;
    background-color: #FFF;
`

export const HeaderItemsGroup = styled.div`
    display: flex;
    align-items: center;
`

export const SearchInputContainer = styled.div`
    position: relative;
    margin-left: 30px;
`

export const SearchInputIcon = styled(SearchIcon)`
    position: absolute;
    top: 50%;
    left: 22px;
    transform: translate(-50%, -50%);
`

export const SearchInput = styled.input`
    width: 25vw;
    min-width: 315px;
    max-width: 630px;
    padding: 15px 15px 15px 44px;
    border-radius: 6px;
    background-color: #F3F3F3;
    font-size: 15px;
    color: rgba(13, 17, 54, 0.5);
`

export const ProfileMenuContainer = styled.div`
    position: relative;
`

export const UserProfilePic = styled.div`
    width: 38px;
    height: 38px;
    border-radius: 19px;
    background-color: indianred;
    cursor: pointer;
`

export const Content = styled.div`
    background-color: #F7F7F7;
    height: calc(100vh - 70px);
    overflow-y: auto;
`