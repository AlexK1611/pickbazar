import { FC } from 'react'
import {
    CardContainer,
    CardHeader,
    VisaImage,
    OptionButtons,
    OptionButton,
    RemoveIcon,
    CardNumberTitle,
    CardNumber,
    CardHolder
} from './CreditCard.styles'
import { CreditCartProps } from './CreditCard.types'
import visa from 'assets/images/visa.svg'
import { ReactComponent as EditIcon } from 'assets/icons/edit.svg'

export const CreditCard: FC<CreditCartProps> = ({
    cardNumber,
    cardHolder,
    editAction,
    removeAction
}) => {
    return (
        <CardContainer>
            <CardHeader>
                <VisaImage src={visa} />
                <OptionButtons>
                    <OptionButton onClick={editAction}>
                        <EditIcon />
                    </OptionButton>
                    <OptionButton isDeleteBtn onClick={removeAction}>
                        <RemoveIcon />
                    </OptionButton>
                </OptionButtons>
            </CardHeader>
            <CardNumberTitle>Card Number</CardNumberTitle>
            <CardNumber>{`**** **** **** ${cardNumber.slice(-4)}`}</CardNumber>
            <CardHolder>{cardHolder}</CardHolder>
        </CardContainer>
    )
}