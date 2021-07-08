export interface ItemState {
    items: any[];
    loading: boolean;
    error: string | null
}

export enum ItemActionType {
    FETCH_ITEMS = 'FETCH_ITEMS',
    FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
    FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR',
    SORT_ITEM_UP = 'SORT_UP',
    SORT_ITEM_DOWN = 'SORT_DOWN'
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

interface SortItem {
    type: ItemActionType.SORT_ITEM_UP | ItemActionType.SORT_ITEM_DOWN;
    payload: any[]
}

export type ItemAction = FetchItemsActions | FetchItemsSuccessActions | FetchItemsErrorActions | SortItem