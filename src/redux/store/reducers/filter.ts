import {ItemActionType, ItemAction, Search} from '../../types/item'

const initialState: Search = {
    searchValue: '',
    loading: false,
    error: null
}

export const searchItem = (state = initialState, action:ItemAction):Search => {
    switch(action.type){
        case ItemActionType.SEARCH_ITEM:
            return {...state, loading:false, error: null, searchValue: action.payload}
        default:
            return state
    }
}