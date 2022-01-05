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
    title,
    description,
    picture,
    finalPrice,
    previousPrice,
    discount
}) => {
    return (
        <ItemContainer>
            {discount && <Discount>{discount}%</Discount>}
            <Picture src={picture}/>
            <InfoSection>
                <Title>{title}</Title>
                <Description>{description}</Description>
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