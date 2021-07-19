import {combineReducers} from 'redux'
import { searchItem } from './filter'
import { itemPrice } from './itemPriceReducer'
import { itemReducer } from './itemReducer'

export const rootReducers = combineReducers(
    {
        item: itemReducer,
        price: itemPrice,
        search: searchItem 
    }
)

export type RootState = ReturnType<typeof rootReducers>