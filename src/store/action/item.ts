import { Dispatch } from "redux"
import { ItemAction, ItemActionType } from "../../types/item"

export const fetchItems = (state: string) => {
    return async (dispatch: Dispatch<ItemAction>) => {
        try {
            dispatch({type: ItemActionType.FETCH_ITEMS})
            const response = await fetch('http://127.0.0.1:5000/api', {method:"POST",body: JSON.stringify({"id": state})})
            const data = await response.json()
            dispatch({type: ItemActionType.FETCH_ITEMS_SUCCESS, payload: data})
            
        } catch (e) {
            console.error(e)
            dispatch({type: ItemActionType.FETCH_ITEMS_ERROR, payload: 'Возникла ошибка при загрузке инвенторя'})
        }
    }
}