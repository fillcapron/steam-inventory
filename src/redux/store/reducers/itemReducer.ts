import {ItemActionType, ItemAction, ItemState} from '../../types/item'

const initialState: ItemState = {
    items: [],
    loading: false,
    error: null
}

export const itemReducer = (state = initialState, action:ItemAction):ItemState => {
    switch(action.type){
        case ItemActionType.FETCH_ITEMS:
            return {...state, loading: true, error: null, items: []}
        case ItemActionType.FETCH_ITEMS_SUCCESS:
            return {...state, loading:false, error: null, items: action.payload}
        case ItemActionType.FETCH_ITEMS_ERROR:
            return {...state, loading:false, error: action.payload, items:[]}
        case ItemActionType.SORT_ITEM_UP:
            return {...state, loading:false, error: null, items: action.payload}
        case ItemActionType.SORT_ITEM_DOWN:
            return {...state, loading:false, error: null, items: action.payload}
        // case ItemActionType.SEARCH_ITEM:
        //     return {...state, loading:false, error: null, items: action.payload}
        case ItemActionType.SORT_ITEM_NAME:
            return {...state, loading:false, error: null, items: action.payload}
        default:
            return state
    }
}