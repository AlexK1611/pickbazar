import { FC } from 'react'

// redux
import { useSelector } from 'react-redux'
import { getDeliverySchedules } from 'store/checkout/selectors'

// types
import { ScheduleItem } from 'store/checkout/types'
import { DeliverStepProps } from './DeliveryStep.types'

// styled components
import { StepOptions } from '../../StepsSection.styles'

// components
import { CheckoutStep } from 'components/CheckoutStep/CheckoutStep.component'
import { CheckoutOption } from 'components/CheckoutOption/CheckoutOption.component'

// helpers
import { valuesEqualityChecker } from 'helpers/helpers'

export const DeliveryStep: FC<DeliverStepProps> = ({ scheduleId, orderValueHandler }) => {
    const deliverySchedules: ScheduleItem[] = useSelector(getDeliverySchedules)

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
                                id={schedule.id}
                                title={schedule.name}
                                info={schedule.description}
                                isSelected={valuesEqualityChecker(scheduleId, schedule.id)}
                                onClick={orderValueHandler('scheduleId', schedule.id)}
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
                                isSelected={valuesEqualityChecker(scheduleId, schedule.id)}
                                onClick={orderValueHandler('scheduleId', schedule.id)}
                            />
                        ))}
                    </StepOptions>
                </>
            )}
        </CheckoutStep>
    )
}