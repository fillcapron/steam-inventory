import {PriceActionType, PriceAction } from "../../../types/types"
import { PriceState } from "./types"

const initialState: PriceState = {
    priceItem: null,
    loading: false,
    error: null
}

export const PriceReducer = (state = initialState, action: PriceAction): PriceState => {
    switch(action.type){
        case PriceActionType.FETCH_PRICE:
            return {...state, loading: true, error: null, priceItem: null}
        case PriceActionType.FETCH_PRICE_SUCCESS:
            return {...state, loading: false, error: null, priceItem: action.payload}
        case PriceActionType.FETCH_PRICE_ERROR:
            return {...state, loading: false, error: action.payload, priceItem: null}
        default:
            return state
    }
}