import { FC } from 'react'
import {
    TopSectionContainer,
    TopSectionInfo,
    TopSectionTitle,
    TopSectionSubTitle
} from './TopSection.styles'

export const TopSection: FC = () => {
    return (
        <TopSectionContainer>
            <TopSectionInfo>
                <TopSectionTitle>
                    Groceries Delivered in 90 Minute
                </TopSectionTitle>
                <TopSectionSubTitle>
                    Get your healthy foods & snacks delivered at your doorsteps all day everyday
                </TopSectionSubTitle>
            </TopSectionInfo>
        </TopSectionContainer>
    )
}