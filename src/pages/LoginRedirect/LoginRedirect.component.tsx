import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { googleAuthRequest } from 'store/auth/actions'
import { getJwt } from 'store/auth/selectors'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { RootReducer } from 'store/rootReducer'

export const LoginRedirect = () => {
    const jwt: string | null = useSelector((state: RootReducer) => getJwt(state))
    const dispatch = useDispatch()
    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (params.provider) {
            dispatch(googleAuthRequest(params.provider, location.search))
        }
    }, [params.provider, location.search])

    useEffect(() => {
        if (jwt) {
            setTimeout(() => navigate('/', { replace: true }), 3000)
        }
    }, [jwt])

    return <></>
}
