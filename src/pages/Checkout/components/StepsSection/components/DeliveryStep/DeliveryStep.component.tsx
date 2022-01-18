import { FC } from 'react'

// redux
import { useSelector } from 'react-redux'
import { getDeliverySchedulesSelector } from 'redux/checkout/selectors'

// types
import { RootReducer } from 'redux/rootReducer'
import { ScheduleItem } from 'redux/checkout/types'
import { DeliverStepProps } from './DeliveryStep.types'
import { OrderCreationTypes } from '../../StepsSection.types'

// styled components
import { StepOptions } from './DeliveryStep.styles'

// components
import { CheckoutStep } from 'components/CheckoutStep/CheckoutStep.component'
import { CheckoutOption } from 'components/CheckoutOption/CheckoutOption.component'

export const DeliveryStep: FC<DeliverStepProps> = ({ state, action }) => {
    const deliverySchedules: ScheduleItem[] = useSelector(
        (state: RootReducer) => getDeliverySchedulesSelector(state)
    )

    return (
        <CheckoutStep
            stepNumber={2}
            stepName='Delivery Schedule'
        >
            {deliverySchedules && (
                <>
                    <StepOptions>
                        {deliverySchedules.map(schedule => (
                            <CheckoutOption
                                key={`delivery-${schedule.id}`}
                                title={schedule.name}
                                info={schedule.description}
                                isSelected={!!(state.schedule?.id === schedule.id)}
                                onClick={() => action({
                                    type: OrderCreationTypes.SET_ORDER_SCHEDULE,
                                    payload: { id: schedule.id, description: schedule.description }
                                })}
                            />
                        ))}
                    </StepOptions>
                    <StepOptions>
                        {deliverySchedules.map(schedule => (
                            <CheckoutOption
                                key={`delivery-${schedule.id}`}
                                title={schedule.label}
                                info={schedule.time}
                                isSelected={!!(state.schedule?.id === schedule.id)}
                                onClick={() => action({
                                    type: OrderCreationTypes.SET_ORDER_SCHEDULE,
                                    payload: { id: schedule.id, description: schedule.description }
                                })}
                            />
                        ))}
                    </StepOptions>
                </>
            )}
        </CheckoutStep>
    )
}