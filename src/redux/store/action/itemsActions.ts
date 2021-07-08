import { Dispatch } from "redux"
import { ItemAction, ItemActionType } from "../../types/item"
import {Items} from '../../../types/types'

export const fetchItems = (state: string) => {
    return async (dispatch: Dispatch<ItemAction>) => {
        try {
            dispatch({type: ItemActionType.FETCH_ITEMS})
            const response = await fetch('http://127.0.0.1:5000/api', {method:"POST",body: JSON.stringify({"id": state})})
            const data = await response.json()
            dispatch({type: ItemActionType.FETCH_ITEMS_SUCCESS, payload: data})
            if (data.error) {
                console.log('error 123')
                dispatch({type: ItemActionType.FETCH_ITEMS_ERROR, payload: 'Слишком частый запрос'})
            }
            else {
                dispatch({type: ItemActionType.FETCH_ITEMS_SUCCESS, payload: data})
            }
            
        } catch (e) {
            console.error(e)
            dispatch({type: ItemActionType.FETCH_ITEMS_ERROR, payload: 'Возникла ошибка при загрузке инвенторя'})
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