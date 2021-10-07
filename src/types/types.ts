export interface Items {
    classid: string,
    count: number,
    description: [],
    icon_url: string,
    instanceid: string,
    market_hash_name: string,
    market_name: string,
    name: string,
    type: ITypeItem[],
    rarity: ITypeItem[],
    quality: ITypeItem[],
    price: number
}

interface ITypeItem {
    [name: string]: string
}