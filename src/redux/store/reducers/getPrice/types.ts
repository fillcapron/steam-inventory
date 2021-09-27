export interface IPrice {
    buyPrice: number;
    sellPrice: number;
}

export interface PriceState {
    priceItem: null | IPrice;
    loading: boolean;
    error: string | null
}