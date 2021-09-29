export interface IPrice {
    success: boolean,
    lowest_price: string,
    volume: number,
    median_price: number
}

export interface PriceState {
    priceItem: null | IPrice;
    loading: boolean;
    error: string | null
}