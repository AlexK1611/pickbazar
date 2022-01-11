import { FC } from 'react'
import {
    ItemContainer,
    PrimaryText,
    SecondaryText,
    LeftContent,
    ItemCounter,
    CounterSection,
    ItemPicture,
    ItemInfo,
    ItemCost,
    RightContent,
    RemoveButton
} from './CartItem.styles'
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'

export const CartItem: FC = () => {
    return (
        <ItemContainer>
            <LeftContent>
                <ItemCounter>
                    <CounterSection isFirst>
                        <SecondaryText>+</SecondaryText>
                    </CounterSection>
                    <CounterSection>
                        <PrimaryText>3</PrimaryText>
                    </CounterSection>
                    <CounterSection isLast>
                        <SecondaryText>-</SecondaryText>
                    </CounterSection>
                </ItemCounter>
                <ItemPicture src={''} />
                <ItemInfo>
                    <PrimaryText>Lime</PrimaryText>
                    <ItemCost>$1.5</ItemCost>
                    <SecondaryText>3 x 12 pc(s)</SecondaryText>
                </ItemInfo>
            </LeftContent>
            <RightContent>
                <PrimaryText>$4.50</PrimaryText>
                <RemoveButton>
                    <CloseIcon />
                </RemoveButton>
            </RightContent>
        </ItemContainer>
    )
}