import { FC } from 'react'
import { TopSection } from './components/TopSection/TopSection.component'
import { Coupons } from './components/Coupons/Coupons.component'
import { Products } from './components/Products/Products.component'

export const Main: FC = () => {
    return (
        <>
           <TopSection />
           <Coupons />
           <Products />
        </>
        
    )
}