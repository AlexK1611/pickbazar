import { FC } from 'react'
import {
    Option,
    OptionHeader,
    OptionButtons,
    OptionButton,
    RemoveIcon,
    OptionTitle,
    OptionInfo
} from './CheckoutOption.styles'
import { CheckoutOptionProps } from './CheckoutOption.types'
import { ReactComponent as EditIcon } from 'assets/icons/edit.svg'

export const CheckoutOption: FC<CheckoutOptionProps> = ({
    id,
    title,
    info,
    isSelected,
    editAction,
    removeAction,
    onClick
}) => {
    return (
        <Option isSelected={isSelected} onClick={onClick}>
            <OptionHeader>
                <OptionTitle>{title}</OptionTitle>
                {editAction && removeAction && (
                    <OptionButtons>
                        {/** TODO: Функция в рендере */}
                        <OptionButton onClick={event => editAction(event, id)}>
                            <EditIcon />
                        </OptionButton>
                        {/** TODO: функция в рендере */}
                        <OptionButton isDeleteBtn onClick={event => removeAction(event, id)}>
                            <RemoveIcon />
                        </OptionButton>
                    </OptionButtons>
                )}
            </OptionHeader>
            <OptionInfo>{info}</OptionInfo>
        </Option>
    )
}