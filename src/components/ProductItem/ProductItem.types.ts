export interface ProductItemProps {
    title: string,
    size: string,
    finalPrice: number,
    previousPrice: number | null,
    discount: number | null
}