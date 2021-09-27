import {ItemActionType, ItemAction} from '../../../types/types'
import { ISearchItems } from './types'

const initialState: ISearchItems = {
    searchValue: '',
    loading: false,
    error: null
}

export const searchItem = (state = initialState, action: ItemAction): ISearchItems => {
    switch(action.type){
        case ItemActionType.SEARCH_ITEM:
            return {...state, loading:false, error: null, searchValue: action.payload}
        default:
            return state
    }
}