import { FC, useState, useEffect } from 'react'
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

export const Info: FC<InfoProps> = ({ productInfo }) => {
    const [selectedPicture, setSelectedPicture] = useState('')
    useEffect(() => {
        if (productInfo.photos.length) {
            setSelectedPicture(productInfo.photos[0].url)
        }
    }, [productInfo.photos.length])

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
                                onClick={() => setSelectedPicture(photo.url)}
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
                <Button>
                    <ButtonIcon />
                    <ButtonTitle>Buy</ButtonTitle>
                </Button>
                {productInfo.category.title && (
                    <Category>
                        <CategoryTitle>{productInfo.category.title}</CategoryTitle>
                    </Category>
                )}   
            </InfoSection>
        </InfoContainer>
    )
}