import { combineReducers } from 'redux'
import { searchItem } from './searchItems'
import { PriceReducer } from './getPrice'
import { ItemReducer } from './getItems'
import { ProfileReducer } from './getProfile'

export const rootReducers = combineReducers(
    {
        item: ItemReducer,
        price: PriceReducer,
        search: searchItem,
        user: ProfileReducer
    }
)

export type RootState = ReturnType<typeof rootReducers>