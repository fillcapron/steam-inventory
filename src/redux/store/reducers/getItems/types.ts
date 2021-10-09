import { Items } from "../../../../types/types";

export interface IPayload{
    total_items?: number,
    app?: string
    bg?: string
    items: Items[],
    total_price?: number 
}

export interface ItemState {
    payload: IPayload 
    loading: boolean,
    error: string | null,
    isFetching: boolean
}

