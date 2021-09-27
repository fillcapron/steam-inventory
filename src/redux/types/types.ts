import { IPayload } from "../store/reducers/getItems/types";
import { IPrice } from "../store/reducers/getPrice/types";
import { IProfileUser } from "../store/reducers/getProfile/types";

export enum ItemActionType {
    FETCH_ITEMS = 'FETCH_ITEMS',
    FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
    FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR',
    SORT_ITEM_UP = 'SORT_UP',
    SORT_ITEM_DOWN = 'SORT_DOWN',
    SEARCH_ITEM = 'SEARCH_ITEM',
    SORT_ITEM_NAME = 'SORT_NAME',
    SORT_ITEM_NAME_REVERSE = 'SORT_NAME_REVERSE'
}

export enum PriceActionType {
    FETCH_PRICE = 'FETCH_PRICE',
    FETCH_PRICE_SUCCESS = 'FETCH_PRICE_SUCCESS',
    FETCH_PRICE_ERROR = 'FETCH_PRICE_ERROR'
}

export enum ProfileActionType {
    FETCH_PROFILE = 'FETCH_PROFILE',
    FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS',
    FETCH_PRICE_ERROR = 'FETCH_PRICE_ERROR'
}

interface FetchItemsActions {
    type: ItemActionType.FETCH_ITEMS
}
interface FetchItemsSuccessActions {
    type: ItemActionType.FETCH_ITEMS_SUCCESS,
    payload: IPayload
}
interface FetchItemsErrorActions {
    type: ItemActionType.FETCH_ITEMS_ERROR,
    payload: string
}

interface SortItemCount {
    type: ItemActionType.SORT_ITEM_UP | ItemActionType.SORT_ITEM_DOWN,
    payload: IPayload
}

interface SortItemName {
    type: ItemActionType.SORT_ITEM_NAME,
    payload: IPayload
}
interface SortItemNameReverse {
    type: ItemActionType.SORT_ITEM_NAME_REVERSE,
    payload: IPayload
}
interface SearchItem {
    type: ItemActionType.SEARCH_ITEM,
    payload: string
}

interface FetchPriceActions {
    type: PriceActionType.FETCH_PRICE
}
interface FetchPriceSuccessActions {
    type: PriceActionType.FETCH_PRICE_SUCCESS,
    payload: IPrice | null
}
interface FetchPriceErrorActions {
    type: PriceActionType.FETCH_PRICE_ERROR,
    payload: string
}

interface FetchProfileActions {
    type: ProfileActionType.FETCH_PROFILE
}

interface FetchProfileSuccessActions {
    type: ProfileActionType.FETCH_PROFILE_SUCCESS,
    payload: IProfileUser
}

interface FetchProfileErrorActions {
    type: ProfileActionType.FETCH_PRICE_ERROR,
    payload: string
}

export type ItemAction = FetchItemsActions | FetchItemsSuccessActions | FetchItemsErrorActions | SortItemCount | SearchItem | SortItemName | SortItemNameReverse;
export type PriceAction = FetchPriceActions | FetchPriceSuccessActions | FetchPriceErrorActions;
export type ProfileAction = FetchProfileActions | FetchProfileSuccessActions | FetchProfileErrorActions;