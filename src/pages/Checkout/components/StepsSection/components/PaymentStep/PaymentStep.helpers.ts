import { OrderValues } from '../../StepsSection.types'

export const orderValuesChecker = (values: OrderValues) => {
    const orderValues = Object.values(values)
    return orderValues.every(value => !!value)
}