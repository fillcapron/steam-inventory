import { Dispatch } from "redux";
import { ItemAction, ItemActionType } from "../../types/types";
import { Items } from '../../../types/types';

const RARITY_SORT = {
	"базового класса": 10,
	"Ширпотреб": 20,
	"Промышленное качество": 30,
	"Армейское качество": 40,
	"высшего класса": 50,
    "Заслуженный": 55,
	"Запрещённое": 60,
	"примечательного типа": 70,
    "Исключительный": 75,
    "Превосходный": 80,
	"Засекреченное": 85,
	"экзотического вида": 90,
    "Мастерский": 93,
	"Тайное": 95,
	"Контрабанда": 97,
	"экстраординарного типа": 99,

	"Common": 10,
	"Uncommon": 20,
	"Rare": 30,
	"Mythical": 40,
	"Immortal": 50,
	"Legendary": 60,
	"Arcana": 70,
} as {[key: string]: number};


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
    sortCountItems: (items: Items[]) => {
        return (dispatch: Dispatch<ItemAction>) => {
            dispatch({ type: ItemActionType.SORT_ITEM_COUNT, payload: { items: items.sort((a: Items, b: Items) => b.count - a.count) } });
        }
    },
    sortRarityItems: (items: Items[]) => {
        return (dispatch: Dispatch<ItemAction>) => {
            dispatch({ type: ItemActionType.SORT_ITEM_RARITY, payload: { items: items.sort((a: Items, b: Items) => RARITY_SORT[b.rarity[0].localized_tag_name] - RARITY_SORT[a.rarity[0].localized_tag_name]) } });
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
    itemsReverse: (items: Items[]) => {
        return (dispatch: Dispatch<ItemAction>) => {
            dispatch({ type: ItemActionType.SORT_ITEM_REVERSE, payload: { items: items.reverse() } });
        }
    }
}
