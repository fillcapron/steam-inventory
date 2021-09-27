import { Dispatch } from "redux";
import { ItemAction, ItemActionType } from "../../types/types";
import { Items } from '../../../types/types';

export const ItemsActions = {
    fetchItems: (id: string, app: string) => {
        return async (dispatch: Dispatch<ItemAction>) => {
            try {
                dispatch({ type: ItemActionType.FETCH_ITEMS });
                const response = await fetch('https://steam-inventory-test.herokuapp.com/api', { method: "POST", body: JSON.stringify({ id, app }) });
                const data = await response.json();
                if (data.error) {
                    dispatch({ type: ItemActionType.FETCH_ITEMS_ERROR, payload: data.error });
                }
                else {
                    dispatch({ type: ItemActionType.FETCH_ITEMS_SUCCESS, payload: data });
                }
            } catch (e) {
                dispatch({ type: ItemActionType.FETCH_ITEMS_ERROR, payload: 'Возникла ошибка при загрузке инвентаря' });
            }
        }
    },
    sortUP: (items: Items[]) => {
        return (dispatch: Dispatch<ItemAction>) => {
            dispatch({ type: ItemActionType.SORT_ITEM_UP, payload: { items: items.sort((a: Items, b: Items) => b.count - a.count) } });
        }
    },
    sortDOWN: (items: Items[]) => {
        return (dispatch: Dispatch<ItemAction>) => {
            dispatch({ type: ItemActionType.SORT_ITEM_DOWN, payload: { items: items.sort((a: Items, b: Items) => a.count - b.count) } });
        }
    },
    searchItem: (str: string) => {
        return (dispatch: Dispatch<ItemAction>) => {
            dispatch({ type: ItemActionType.SEARCH_ITEM, payload: str.toLocaleLowerCase() });
        }
    },
    sortItemsName: (items: Items[]) => {
        return (dispatch: Dispatch<ItemAction>) => {
            dispatch({ type: ItemActionType.SORT_ITEM_NAME, payload: { items: items.sort((a: Items, b: Items) => a.name.localeCompare(b.name)) } });
        }
    },
    sortItemsNameReverse: (items: Items[]) => {
        return (dispatch: Dispatch<ItemAction>) => {
            dispatch({ type: ItemActionType.SORT_ITEM_NAME_REVERSE, payload: { items: items.reverse() } });
        }
    }
}
