import { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { useAction } from "../hooks/useActions";
import { usedTypedSelector } from "../hooks/useTypedSelector";

const ItemPage: React.FC<RouteComponentProps> = ({ match }: any) => {
    const { payload } = usedTypedSelector(state => state.item);
    const { priceItem, error, loading } = usedTypedSelector(state => state.price);
    const { fetchPrice } = useAction();

    const one_item = payload?.items.find(elem => elem.name === match.params.id)!;

    // const getPrice = useCallback(()=>{
    //     fetchPrice(one_item?.name, 440)
    // }, [])

    if (loading) <h1>Загрузка</h1>
    if (error) <h1>Ошибка</h1>

    useEffect(() => {
        fetchPrice(one_item?.market_hash_name, localStorage.getItem('app') || null, 5)
    }, [fetchPrice, one_item?.market_hash_name])

    return (
        <div className="content">
            {
                one_item ?
                    // <div className="item-page">
                    //     <div className="item">
                    //         <div className="item-img">
                    //         <img src={'https://community.akamai.steamstatic.com/economy/image/'+ one_item.icon_url +'/360fx360f'} alt={one_item.name} />
                    //         </div>
                    //         <div className="item-info">
                    //             <span>{one_item.name}</span>
                    //             <span>Rarity:{one_item.type.localized_tag_name}</span>
                    //             <span>Count:{one_item.count}</span>
                    //         </div>
                    //     </div>
                    // </div>
                    <div className="item-page">
                        <div className="item-page-left">
                            <div className="item-image">
                                <img src={'https://community.akamai.steamstatic.com/economy/image/' + one_item.icon_url + '/360fx360f'} alt={one_item.name} />
                            </div>
                        </div>
                        <div className="item-page-right">
                            <div className="item-description">
                                <h1>{one_item.name}</h1>
                                <p>Количество: {one_item.count}</p>
                                <p>Цена продажи: {priceItem?.lowest_price}</p>
                            </div>
                        </div>
                    </div>
                    : 'Загрузка'
            }
        </div>
    )
}

export default ItemPage;