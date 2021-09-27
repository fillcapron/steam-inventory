import { ProfileAction, ProfileActionType } from "../../../types/types";
import { IProfileData } from "./types";

const initialState: IProfileData = {
    payload: {
        avatar: '',
        name: '',
        profileurl: '',
        profilevisiblity: 0,
        status: 0,
        steamid: 0
    },
    loading: false,
    error: ''
}

export function ProfileReducer(state = initialState, action: ProfileAction): IProfileData {
    switch (action.type) {
        case ProfileActionType.FETCH_PROFILE:
            return { ...state, loading: true, error: null }
        case ProfileActionType.FETCH_PROFILE_SUCCESS:
            return { ...state, loading: false, error: null, payload: action.payload }
        case ProfileActionType.FETCH_PRICE_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}