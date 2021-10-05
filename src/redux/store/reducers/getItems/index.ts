import { ItemActionType, ItemAction } from '../../../types/types'
import { ItemState } from './types'

const initialState: ItemState = {
    payload: {
        items: [],
    },
    loading: false,
    error: null,
    isFetching: false
}

export const ItemReducer = (state = initialState, action: ItemAction): ItemState => {
    switch (action.type) {
        case ItemActionType.FETCH_ITEMS:
            return { ...state, loading: true, error: null, isFetching: true }
        case ItemActionType.FETCH_ITEMS_SUCCESS:
            return { ...state, loading: false, error: null, payload: action.payload }
        case ItemActionType.FETCH_ITEMS_ERROR:
            return { ...state, loading: false, error: action.payload }
        case ItemActionType.SORT_ITEM_COUNT:
            return { ...state, loading: false, error: null, payload: { ...state.payload, ...action.payload } }
        case ItemActionType.SORT_ITEM_RARITY:
            return { ...state, loading: false, error: null, payload: { ...state.payload, ...action.payload } }
        case ItemActionType.SORT_ITEM_NAME:
            return { ...state, loading: false, error: null, payload: { ...state.payload, ...action.payload } }
        case ItemActionType.SORT_ITEM_REVERSE:
            return { ...state, loading: false, error: null, payload: { ...state.payload, ...action.payload } }
        default:
            return state
    }
}