import React from 'react'
import {
    TopSectionContainer,
    TopSectionInfo,
    TopSectionTitle,
    TopSectionSubTitle
} from './styled'

export const TopSection = () => {
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