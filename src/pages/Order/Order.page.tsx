import { FC } from 'react'
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
    return (
        <OrderContainer>
            <OrderBody>
                <DataSection>
                    <DataTitle>Order Received</DataTitle>
                    <OrderMessage>Thank you. Your order has been received</OrderMessage>
                    <OverallInfo>
                        <div>
                            <Subtitle>Order Number</Subtitle>
                            <Info isColumn>1444</Info>
                        </div>
                        <div>
                            <Subtitle>Date</Subtitle>
                            <Info isColumn>March 14, 2019</Info>
                        </div>
                        <div>
                            <Subtitle>Total</Subtitle>
                            <Info isColumn>$10,944.00</Info>
                        </div>
                        <div>
                            <Subtitle>Payment Method</Subtitle>
                            <Info isColumn>Cash on delivery</Info>
                        </div>
                    </OverallInfo>
                </DataSection>
                <DataSection>
                    <DataTitle>Order Details</DataTitle>
                    <DataItems>
                        <DataItem>
                            <Subtitle>Order Number:</Subtitle>
                            <Info>March 14, 2019</Info>
                        </DataItem>
                        <DataItem>
                            <Subtitle>Order Time:</Subtitle>
                            <Info>1:00pm 10/12/19</Info>
                        </DataItem>
                        <DataItem>
                            <Subtitle>Delivery Time:</Subtitle>
                            <Info>90 Minute Express Delivery</Info>
                        </DataItem>
                        <DataItem>
                            <Subtitle>Delivery Location:</Subtitle>
                            <Info>1st floor, House 149, Road-22, Mohakhali DOHS, Dhaka - North</Info>
                        </DataItem>
                    </DataItems>
                </DataSection>
                <DataSection>
                    <DataTitle>Total Amount</DataTitle>
                    <DataItems>
                        <DataItem>
                            <Subtitle>Sub Total:</Subtitle>
                            <Info>$10,864.00</Info>
                        </DataItem>
                        <DataItem>
                            <Subtitle>Payment Method:</Subtitle>
                            <Info>Cash On Delivery</Info>
                        </DataItem>
                        <DataItem>
                            <Subtitle>Cash on delivery:</Subtitle>
                            <Info>10</Info>
                        </DataItem>
                        <DataItem>
                            <Subtitle>Total:</Subtitle>
                            <Info>$10,874.00</Info>
                        </DataItem>
                    </DataItems>
                </DataSection>
            </OrderBody>
        </OrderContainer>
    )
}