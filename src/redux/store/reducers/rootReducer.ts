import {combineReducers} from 'redux'
import { itemPrice } from './itemPriceReducer'
import { itemReducer } from './itemReducer'

export const rootReducers = combineReducers(
    {
        item: itemReducer,
        price: itemPrice
    }
)

export type RootState = ReturnType<typeof rootReducers>