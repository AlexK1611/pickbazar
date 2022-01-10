export interface ProductItemProps {
    picture: string,
    title: string,
    size: string,
    finalPrice: number,
    previousPrice: number | null,
    discount: number | null
}