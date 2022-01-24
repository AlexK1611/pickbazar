import { FC, useState, useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'
import { getCreatedOrder } from 'store/orders/selectors'
import { clearCart } from 'store/cart/actions'

// libraries
import { useNavigate } from 'react-router-dom'

// types 
import { CreatedOrderItem } from 'store/orders/types'

// styled components
import { CheckoutContainer } from './Checkout.styles'

// components
import { StepsSection } from './components/StepsSection/StepsSection.component'
import { OrderSection } from './components/OrderSection/OrderSection.component'
import { CheckoutModal } from './components/CheckoutModal/CheckoutModal.component'

export const Checkout: FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const createdOrder: CreatedOrderItem | null = useSelector(getCreatedOrder)
    useEffect(() => {
        if (createdOrder) {
            navigate('/order', { replace: true })
            dispatch(clearCart())
        }
    }, [createdOrder])

    const [formType, setFormType] = useState('')
    const [addressId, setAddressId] = useState('')
    const [phoneId, setPhoneId] = useState('')

    return (
        <CheckoutContainer>
            <StepsSection
                setFormType={setFormType}
                setAddressId={setAddressId}
                setPhoneId={setPhoneId}
            />
            <OrderSection />
            <CheckoutModal
                isModal={!!formType}
                setFormType={setFormType}
                setAddressId={setAddressId}
                setPhoneId={setPhoneId}
                formType={formType}
                addressId={addressId}
                phoneId={phoneId}
            />
        </CheckoutContainer>
    )
}