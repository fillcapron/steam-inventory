export interface ItemState {
    items: any[];
    loading: boolean;
    error: string | null
}
export interface PriceItem {
    itemName: string,
    buyPrice: number,
    sellPrice: number
}
export interface Search {
    searchValue: string;
    loading: boolean;
    error: string | null
}
export interface priceState {
    priceItem: any;
    loading: boolean;
    error: string | null
}

export enum ItemActionType {
    FETCH_ITEMS = 'FETCH_ITEMS',
    FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
    FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR',
    SORT_ITEM_UP = 'SORT_UP',
    SORT_ITEM_DOWN = 'SORT_DOWN',
    SEARCH_ITEM = 'SEARCH_ITEM'
}

export enum PriceActionType {
    FETCH_PRICE = 'FETCH_PRICE',
    FETCH_PRICE_SUCCESS = 'FETCH_PRICE_SUCCESS',
    FETCH_PRICE_ERROR = 'FETCH_PRICE_ERROR'
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

interface SearchItem {
    type: ItemActionType.SEARCH_ITEM
    payload: string
}

interface FetchPriceActions {
    type: PriceActionType.FETCH_PRICE
}
interface FetchPriceSuccessActions {
    type: PriceActionType.FETCH_PRICE_SUCCESS;
    payload: any[]
}
interface FetchPriceErrorActions {
    type: PriceActionType.FETCH_PRICE_ERROR;
    payload: string
}

export type ItemAction = FetchItemsActions | FetchItemsSuccessActions | FetchItemsErrorActions | SortItem | SearchItem
export type PriceAction = FetchPriceActions | FetchPriceSuccessActions | FetchPriceErrorActions