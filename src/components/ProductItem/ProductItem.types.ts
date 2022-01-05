export interface ProductItemProps {
    title: string,
    description: string,
    picture: string,
    finalPrice: number,
    previousPrice?: number,
    discount?: number
}