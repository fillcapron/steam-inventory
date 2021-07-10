import { Dispatch } from "redux"
import { PriceAction, PriceActionType } from "../../types/item"

export const fetchPrice = (item_name:string, conversion:number = 440) => {
    return async (dispatch: Dispatch<PriceAction>) => {
        try {
            dispatch({type: PriceActionType.FETCH_PRICE})
            const response = await fetch(`https://steam-inventory-test.herokuapp.com/market_search?text=${item_name}&conversion=${conversion}`)
            const data = await response.json()
            // dispatch({type: ItemActionType.FETCH_ITEMS_SUCCESS, payload: data})
            if (data.error) {
                dispatch({type: PriceActionType.FETCH_PRICE_ERROR, payload: 'Слишком частый запрос'})
            }
            else {
                dispatch({type: PriceActionType.FETCH_PRICE_SUCCESS, payload: data})
            }
            
        } catch (e) {
            console.error(e)
            dispatch({type: PriceActionType.FETCH_PRICE_ERROR, payload: 'Возникла ошибка при загрузке цен'})
        }
    }
}