import { FC, useState, useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { getCreatedOrder } from 'redux/orders/selectors'
import { clearCart } from 'redux/cart/actions'

// libraries
import { useNavigate } from 'react-router-dom'

// types 
import { RootReducer } from 'redux/rootReducer'
import { CreatedOrderItem } from 'redux/orders/types'

// styled components
import { CheckoutContainer } from './Checkout.styles'

// components
import { StepsSection } from './components/StepsSection/StepsSection.component'
import { OrderSection } from './components/OrderSection/OrderSection.component'
import { CheckoutModal } from './components/CheckoutModal/CheckoutModal.component'

export const Checkout: FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const createdOrder: CreatedOrderItem | null = useSelector(
        (state: RootReducer) => getCreatedOrder(state)
    )
    useEffect(() => {
        if (createdOrder) {
            navigate('/order', { replace: true })
            dispatch(clearCart())
        }
    }, [createdOrder])

    const [formType, setFormType] = useState('')
    const [addressId, setAddressId] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    return (
        <CheckoutContainer>
            <StepsSection
                setFormType={setFormType}
                setAddressId={setAddressId}
                setPhoneNumber={setPhoneNumber}
            />
            <OrderSection />
            <CheckoutModal
                isModal={!!formType}
                setFormType={setFormType}
                setAddressId={setAddressId}
                setPhoneNumber={setPhoneNumber}
                formType={formType}
                addressId={addressId}
                phoneNumber={phoneNumber}
            />
        </CheckoutContainer>
    )
}