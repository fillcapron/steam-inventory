import { Items } from "../../../../types/types";

export interface IPayload{
    total?: number,
    items: Items[] 
}

export interface ItemState {
    payload: IPayload 
    loading: boolean,
    error: string | null,
    isFetching: boolean
}

