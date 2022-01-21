import { FC } from 'react'

// redux
import { useSelector } from 'react-redux'
import { getDeliverySchedules } from 'store/checkout/selectors'

// types
import { RootReducer } from 'store/rootReducer'
import { ScheduleItem } from 'store/checkout/types'
import { DeliverStepProps } from './DeliveryStep.types'
import { OrderCreationTypes } from '../../StepsSection.types'

// styled components
import { StepOptions } from './DeliveryStep.styles'

// components
import { CheckoutStep } from 'components/CheckoutStep/CheckoutStep.component'
import { CheckoutOption } from 'components/CheckoutOption/CheckoutOption.component'

// helpers
import { valuesComparator } from '../../StepsSection.helpers'

export const DeliveryStep: FC<DeliverStepProps> = ({ state, action }) => {
    const deliverySchedules: ScheduleItem[] = useSelector(
        (state: RootReducer) => getDeliverySchedules(state)
    )

    return (
        <CheckoutStep
            stepNumber={2}
            stepName='Delivery Schedule'
            formType='add-delivery'
        >
            {deliverySchedules && (
                <>
                    <StepOptions>
                        {deliverySchedules.map(schedule => (
                            <CheckoutOption
                                key={`delivery-${schedule.id}`}
                                id={schedule.id}
                                title={schedule.name}
                                info={schedule.description}
                                isSelected={valuesComparator(state.schedule?.id, schedule.id)}
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
                                id={schedule.id}
                                title={schedule.label}
                                info={schedule.time}
                                isSelected={valuesComparator(state.schedule?.id, schedule.id)}
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