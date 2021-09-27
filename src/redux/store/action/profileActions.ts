import { Dispatch } from "redux"
import { ProfileAction, ProfileActionType } from "../../types/types"

export const ProfileActions = {
    fetchProfile: (steamid: string) => {
        return async (dispatch: Dispatch<ProfileAction>) => {
            try {
                dispatch({ type: ProfileActionType.FETCH_PROFILE })
                const response = await fetch(`https://steam-inventory-test.herokuapp.com/profile?steamid=${steamid}`)
                const data = await response.json()
                if (data.error) {
                    dispatch({ type: ProfileActionType.FETCH_PROFILE_SUCCESS, payload: data.error })
                }
                else {
                    dispatch({ type: ProfileActionType.FETCH_PROFILE_SUCCESS, payload: data })
                }
            } catch (e) {
                dispatch({ type: ProfileActionType.FETCH_PRICE_ERROR, payload: 'Возникла ошибка при загрузке профиля' })
            }
        }
    }
}