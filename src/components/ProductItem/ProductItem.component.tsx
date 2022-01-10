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

export const ProductItem: FC<ProductItemProps> = ({
    picture,
    title,
    size,
    finalPrice,
    previousPrice,
    discount
}) => {
    return (
        <ItemContainer>
            {discount && <Discount>{discount}%</Discount>}
            <Picture src={`${process.env.REACT_APP_HOST}${picture}`}/>
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