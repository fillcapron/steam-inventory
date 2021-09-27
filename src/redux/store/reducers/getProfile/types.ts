export interface IProfileUser {
    avatar: string,
    name: string,
    profileurl: string,
    profilevisiblity: number,
    status: number,
    steamid: number
}
export interface IProfileData {
    payload: IProfileUser,
    loading: boolean,
    error: string | null
}
