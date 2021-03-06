import { FC, useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItemToCart } from 'store/cart/actions'
import { getCartItems } from 'store/cart/selectors'
import {
    InfoContainer,
    PicturesSection,
    SelectedPicture,
    Thumbnails,
    ThumbnailItem,
    InfoSection,
    TitleAndPrice,
    Title,
    Price,
    Size,
    Description,
    Button,
    ButtonTitle,
    ButtonIcon,
    Category,
    CategoryTitle
} from './Info.styles'
import { InfoProps } from './Info.types'
import { PurchaseItem } from 'store/cart/types'
import { CartButton } from 'components/CartButton/CartButton.component'
import { Cart } from 'components/Cart/Cart.component'
import { cartItemFinder } from 'helpers/helpers'

export const Info: FC<InfoProps> = ({ productInfo }) => {
    const cart: PurchaseItem[] | [] = useSelector(getCartItems)
    const dispatch = useDispatch()

    const [selectedPicture, setSelectedPicture] = useState('')
    useEffect(() => {
        if (productInfo.photos.length) {
            setSelectedPicture(productInfo.photos[0].url)
        }
    }, [productInfo.photos])
    const selectedPhotoHandler = (url: string) => {
        return () => setSelectedPicture(url)
    }

    const [isCartOpened, setCartOpened] = useState(false)
    const cartOpenedHandler = useCallback(
        () => setCartOpened(isCartOpened => !isCartOpened),
        []
    )

    const cartItemAddHandler = () => {
        dispatch(addItemToCart(productInfo))
    }

    return (
        <InfoContainer>
            <PicturesSection>
                <SelectedPicture src={`${process.env.REACT_APP_HOST}${selectedPicture}`}/>
                {productInfo.photos && (
                    <Thumbnails>
                        {productInfo.photos.map(photo => (
                            <ThumbnailItem
                                key={`product-picture-${photo.id}`}
                                src={`${process.env.REACT_APP_HOST}${photo.url}`}
                                onClick={selectedPhotoHandler(photo.url)}
                                isSelected={photo.url === selectedPicture}
                            />
                        ))}
                    </Thumbnails>
                )}
            </PicturesSection>
            <InfoSection>
                <TitleAndPrice>
                    {productInfo.name && <Title>{productInfo.name}</Title>}
                    {productInfo.price && <Price>${productInfo.price}</Price>}
                </TitleAndPrice>
                {productInfo.size && <Size>{productInfo.size}</Size>}
                {productInfo.description && <Description>{productInfo.description}</Description>}
                <Button
                    disabled={cartItemFinder(cart, productInfo.id)}
                    onClick={cartItemAddHandler}
                >
                    <ButtonIcon />
                    <ButtonTitle>Buy</ButtonTitle>
                </Button>
                {productInfo.category.title && (
                    <Category>
                        <CategoryTitle>{productInfo.category.title}</CategoryTitle>
                    </Category>
                )}   
            </InfoSection>
            <CartButton cartOpenedHandler={cartOpenedHandler} />
            <Cart
                isCartOpened={isCartOpened}
                cartOpenedHandler={cartOpenedHandler}
            />
        </InfoContainer>
    )
}