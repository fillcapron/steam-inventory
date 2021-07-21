import { Dispatch } from "redux"
import { ItemAction, ItemActionType } from "../../types/item"
import {Items} from '../../../types/types'

export const fetchItems = (state: string) => {
    return async (dispatch: Dispatch<ItemAction>) => {
        try {
            dispatch({type: ItemActionType.FETCH_ITEMS})
            const response = await fetch('https://steam-inventory-test.herokuapp.com/api', {method:"POST",body: JSON.stringify({"id": state})})
            const data = await response.json()
            if (data.error) {
                dispatch({type: ItemActionType.FETCH_ITEMS_ERROR, payload: 'Слишком частый запрос'})
            }
            else {
                dispatch({type: ItemActionType.FETCH_ITEMS_SUCCESS, payload: data})
            }
            
        } catch (e) {
            console.error(e)
            dispatch({type: ItemActionType.FETCH_ITEMS_ERROR, payload: 'Возникла ошибка при загрузке инвентаря'})
        }
    }
}

export const sortUP = (items:Items[]) => {
    return (dispatch: Dispatch<ItemAction>) => {
        dispatch({type: ItemActionType.SORT_ITEM_UP, payload: items.sort((a:Items,b:Items) => b.count - a.count)})
    }
}
export const sortDOWN = (items:Items[]) => {
    return (dispatch: Dispatch<ItemAction>) => {
        dispatch({type: ItemActionType.SORT_ITEM_DOWN, payload: items.sort((a:Items,b:Items) => a.count - b.count)})
    }
}

export const searchItem = (str: string) => {
    return (dispatch: Dispatch<ItemAction>) => {
        dispatch({type: ItemActionType.SEARCH_ITEM, payload: str.toLocaleLowerCase()})
    }
}

export const sortItemsName = (items: Items[]) => {
    return (dispatch: Dispatch<ItemAction>) =>{
        dispatch({type: ItemActionType.SORT_ITEM_NAME, payload: items.sort((a:Items,b:Items) => a.name.toLowerCase() < b.name.toLowerCase()? 1:-1)})
    }
}