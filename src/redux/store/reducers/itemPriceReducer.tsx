import {PriceActionType, PriceAction, priceState } from "../../types/item"

const initialState: priceState = {
    item: {},
    loading: false,
    error: null
}

export const itemPrice = (state = initialState, action:PriceAction):priceState => {
    switch(action.type){
        case PriceActionType.FETCH_PRICE:
            return {...state, loading: true, error: null, item: {}}
        case PriceActionType.FETCH_PRICE_SUCCESS:
            return {...state, loading:false, error: null, item: action.payload}
        case PriceActionType.FETCH_PRICE_ERROR:
            return {...state, loading:false, error: action.payload, item:{}}
        default:
            return state
    }
}