import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getCreatedOrder, getCreatedOrderTotal } from 'store/orders/selectors'
import moment from 'moment'
import { CreatedOrderItem } from 'store/orders/types'
import {
    OrderContainer,
    OrderBody,
    OrderMessage,
    Subtitle,
    Info,
    OverallInfo,
    DataSection,
    DataTitle,
    DataItems,
    DataItem
} from './Order.styles'

export const Order: FC = () => {
    const createdOrder: CreatedOrderItem | null = useSelector(getCreatedOrder)
    const createdOrderTotal: number | undefined = useSelector(getCreatedOrderTotal)

    return (
        <OrderContainer>
            <OrderBody>
                <DataSection>
                    <DataTitle>Order Received</DataTitle>
                    <OrderMessage>Thank you. Your order has been received</OrderMessage>
                    <OverallInfo>
                        <div>
                            <Subtitle>Order Number</Subtitle>
                            <Info isColumn>{createdOrder?.id}</Info>
                        </div>
                        <div>
                            <Subtitle>Date</Subtitle>
                            <Info isColumn>{moment(createdOrder?.created_at).format('L')}</Info>
                        </div>
                        <div>
                            <Subtitle>Total</Subtitle>
                            <Info isColumn>${createdOrderTotal?.toFixed(2)}</Info>
                        </div>
                        <div>
                            <Subtitle>Payment Method</Subtitle>
                            <Info isColumn>{createdOrder?.payment}</Info>
                        </div>
                    </OverallInfo>
                </DataSection>
                <DataSection>
                    <DataTitle>Order Details</DataTitle>
                    <DataItems>
                        <DataItem>
                            <Subtitle>Order Date:</Subtitle>
                            <Info>{moment(createdOrder?.created_at).format('L')}</Info>
                        </DataItem>
                        <DataItem>
                            <Subtitle>Order Time:</Subtitle>
                            <Info>{createdOrder?.when}</Info>
                        </DataItem>
                        <DataItem>
                            <Subtitle>Delivery Time:</Subtitle>
                            <Info>{createdOrder?.schedule}</Info>
                        </DataItem>
                        <DataItem>
                            <Subtitle>Delivery Location:</Subtitle>
                            <Info>{createdOrder?.address}</Info>
                        </DataItem>
                    </DataItems>
                </DataSection>
                <DataSection>
                    <DataTitle>Total Amount</DataTitle>
                    <DataItems>
                        <DataItem>
                            <Subtitle>Sub Total:</Subtitle>
                            <Info>${createdOrderTotal?.toFixed(2)}</Info>
                        </DataItem>
                        <DataItem>
                            <Subtitle>Payment Method:</Subtitle>
                            <Info>{createdOrder?.payment}</Info>
                        </DataItem>
                        <DataItem>
                            <Subtitle>Cash on delivery:</Subtitle>
                            <Info>${(10).toFixed(2)}</Info>
                        </DataItem>
                        <DataItem>
                            <Subtitle>Total:</Subtitle>
                            <Info>${(createdOrderTotal! + 10).toFixed(2)}</Info>
                        </DataItem>
                    </DataItems>
                </DataSection>
            </OrderBody>
        </OrderContainer>
    )
}