export interface ItemState {
    items: any[];
    loading: boolean;
    error: string | null
}

export enum ItemActionType {
    FETCH_ITEMS = 'FETCH_ITEMS',
    FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
    FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR'
}

interface FetchItemsActions {
    type: ItemActionType.FETCH_ITEMS
}
interface FetchItemsSuccessActions {
    type: ItemActionType.FETCH_ITEMS_SUCCESS;
    payload: any[]
}
interface FetchItemsErrorActions {
    type: ItemActionType.FETCH_ITEMS_ERROR;
    payload: string
}

export type ItemAction = FetchItemsActions | FetchItemsSuccessActions | FetchItemsErrorActions