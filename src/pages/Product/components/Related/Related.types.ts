import { ProductUnit } from "redux/products/types";

export interface RelatedProps {
    products: ProductUnit[],
    productId?: string
}