import {combineReducers} from 'redux'
import { itemReducer } from './itemReducer'

export const rootReducers = combineReducers(
    {
        item: itemReducer
    }
)

export type RootState = ReturnType<typeof rootReducers>