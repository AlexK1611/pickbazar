import { FC } from 'react'

// redux
import { useSelector } from 'react-redux'
import { getDeliverySchedulesSelector } from 'redux/checkout/selectors'

// types
import { RootReducer } from 'redux/rootReducer'
import { ScheduleItem } from 'redux/checkout/types'

import {
    CheckoutSteps,
    CheckoutStepOptions
} from './StepsSection.styles'
import { CheckoutOption } from 'components/CheckoutOption/CheckoutOption.component'
import { CheckoutStep } from 'components/CheckoutStep/CheckoutStep.component'

export const StepsSection: FC = () => {
    const deliverySchedules: ScheduleItem[] = useSelector((state: RootReducer) => getDeliverySchedulesSelector(state))
    
    return (
        <CheckoutSteps>
            <CheckoutStep
                stepNumber={2}
                stepName='Delivery Schedule'
            >
                <CheckoutStepOptions>
                    {deliverySchedules.map(schedule => (
                        <CheckoutOption
                            key={`delivery-${schedule.id}`}
                            title={schedule.name}
                            info={schedule.description}
                        />
                    ))}
                </CheckoutStepOptions>
                <CheckoutStepOptions>
                    {deliverySchedules.map(schedule => (
                        <CheckoutOption
                            key={`delivery-${schedule.id}`}
                            title={schedule.label}
                            info={schedule.time}
                        />
                    ))}
                </CheckoutStepOptions>
            </CheckoutStep>
        </CheckoutSteps>
    )
}