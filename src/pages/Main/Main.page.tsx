import { FC } from 'react'
import { TopSection } from './components/TopSection/TopSection.component'
import { Coupons } from './components/Coupons/Coupons.component'

export const Main: FC = () => {
    return (
        <>
           <TopSection />
           <Coupons />
        </>
        
    )
}