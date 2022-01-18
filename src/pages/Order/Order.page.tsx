import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getCreatedOrder } from 'redux/orders/selectors'
import { RootReducer } from 'redux/rootReducer'
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
    const createdOrder = useSelector((state: RootReducer) => getCreatedOrder(state))

    return (
        <OrderContainer>
            <OrderBody>
                <DataSection>
                    <DataTitle>Order Received</DataTitle>
                    <OrderMessage>Thank you. Your order has been received</OrderMessage>
                    <OverallInfo>
                        {createdOrder?.id && (
                            <div>
                                <Subtitle>Order Number</Subtitle>
                                <Info isColumn>{createdOrder.id}</Info>
                            </div>
                        )}
                        {createdOrder?.created_at && (
                            <div>
                                <Subtitle>Date</Subtitle>
                                <Info isColumn>{createdOrder.created_at.slice(0, 10)}</Info>
                            </div>
                        )}
                        {createdOrder?.products.length && (
                            <div>
                                <Subtitle>Total</Subtitle>
                                <Info isColumn>
                                    ${(createdOrder.products
                                        .map(product => product.price)
                                        .reduce((total, current) => total + current, 0)
                                    ).toFixed(2)}
                                </Info>
                            </div>
                        )}
                        {createdOrder?.payment && (
                            <div>
                                <Subtitle>Payment Method</Subtitle>
                                <Info isColumn>{createdOrder.payment}</Info>
                            </div>
                        )}
                    </OverallInfo>
                </DataSection>
                <DataSection>
                    <DataTitle>Order Details</DataTitle>
                    <DataItems>
                        {createdOrder?.created_at && (
                            <DataItem>
                                <Subtitle>Order Date:</Subtitle>
                                <Info>{createdOrder.created_at.slice(0, 10)}</Info>
                            </DataItem>
                        )}
                        {createdOrder?.when && (
                            <DataItem>
                                <Subtitle>Order Time:</Subtitle>
                                <Info>{createdOrder.when}</Info>
                            </DataItem>
                        )}
                        {createdOrder?.schedule && (
                            <DataItem>
                                <Subtitle>Delivery Time:</Subtitle>
                                <Info>{createdOrder.schedule}</Info>
                            </DataItem>
                        )}
                        {createdOrder?.address && (
                            <DataItem>
                                <Subtitle>Delivery Location:</Subtitle>
                                <Info>{createdOrder?.address}</Info>
                            </DataItem>
                        )}
                    </DataItems>
                </DataSection>
                <DataSection>
                    <DataTitle>Total Amount</DataTitle>
                    <DataItems>
                        {createdOrder?.products.length && (
                            <DataItem>
                                <Subtitle>Sub Total:</Subtitle>
                                <Info>
                                    ${(createdOrder.products
                                        .map(product => product.price)
                                        .reduce((total, current) => total + current, 0)
                                    ).toFixed(2)}
                                </Info>
                            </DataItem>
                        )}
                        {createdOrder?.payment && (
                            <DataItem>
                                <Subtitle>Payment Method:</Subtitle>
                                <Info>{createdOrder.payment}</Info>
                            </DataItem>
                        )}
                        <DataItem>
                            <Subtitle>Cash on delivery:</Subtitle>
                            <Info>${(10).toFixed(2)}</Info>
                        </DataItem>
                        {createdOrder?.products.length && (
                            <DataItem>
                                <Subtitle>Total:</Subtitle>
                                <Info>
                                    ${(createdOrder.products
                                        .map(product => product.price)
                                        .reduce((total, current) => total + current, 0)
                                        + 10
                                    ).toFixed(2)}
                                </Info>
                            </DataItem>
                        )}
                    </DataItems>
                </DataSection>
            </OrderBody>
        </OrderContainer>
    )
}