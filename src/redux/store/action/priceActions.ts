import { Dispatch } from "redux"
import { PriceAction, PriceActionType } from "../../types/types"

export const PriceAtions = {
    fetchPrice: (item_name: string, currency: number) => {
        return async (dispatch: Dispatch<PriceAction>) => {
            try {
                dispatch({ type: PriceActionType.FETCH_PRICE })
                const response = await fetch(`https://steam-inventory-test.herokuapp.com/price?name=${item_name}&conversion=${currency}`)
                const data = await response.json()
                if (data.error) {
                    dispatch({ type: PriceActionType.FETCH_PRICE_ERROR, payload: 'Слишком частый запрос' })
                }
                else {
                    dispatch({ type: PriceActionType.FETCH_PRICE_SUCCESS, payload: data })
                }

            } catch (e) {
                dispatch({ type: PriceActionType.FETCH_PRICE_ERROR, payload: 'Возникла ошибка при загрузке цен' })
            }
        }
    }
}