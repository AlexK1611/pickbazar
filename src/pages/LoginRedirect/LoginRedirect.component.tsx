import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { googleAuthRequest } from 'redux/auth/actions'
import { getJwt } from 'redux/auth/selectors'
import { useLocation, useNavigate } from 'react-router-dom'
import { RootReducer } from 'redux/rootReducer'

export const LoginRedirect = () => {
    const jwt: string | null = useSelector((state: RootReducer) => getJwt(state))
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(googleAuthRequest(location.search))
    }, [location.search])

    useEffect(() => {
        if (jwt) {
            setTimeout(() => navigate('/', { replace: true }), 3000)
        }
    }, [jwt])

    return <></>
}