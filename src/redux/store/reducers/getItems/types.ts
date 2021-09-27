import { Items } from "../../../../types/types";

export interface IPayload{
    total?: string,
    items: Items[] 
}

export interface ItemState {
    payload: IPayload 
    loading: boolean,
    error: string | null,
    isFetching: boolean
}

