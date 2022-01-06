import { FC } from 'react'
import {
    ItemContainer,
    Discount,
    Picture,
    InfoSection,
    Title,
    Description,
    PurchaseSection,
    PreviousPrice,
    FinalPrice,
    Button,
    ButtonIcon,
    ButtonTitle
} from './ProductItem.styles'
import { ProductItemProps } from './ProductItem.types'
import productDefault from 'assets/images/product-default.png'

export const ProductItem: FC<ProductItemProps> = ({
    title,
    size,
    finalPrice,
    previousPrice,
    discount
}) => {
    return (
        <ItemContainer>
            {discount && <Discount>{discount}%</Discount>}
            <Picture src={productDefault}/>
            <InfoSection>
                <Title>{title}</Title>
                <Description>{size}</Description>
            </InfoSection>
            <PurchaseSection>
                {previousPrice && <PreviousPrice>${previousPrice}</PreviousPrice>}
                <FinalPrice>${finalPrice}</FinalPrice>
                <Button>
                    <ButtonIcon/>
                    <ButtonTitle>Cart</ButtonTitle>
                </Button>
            </PurchaseSection>
        </ItemContainer>
    )
}