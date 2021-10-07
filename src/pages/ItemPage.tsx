import { useEffect } from "react";
import { Link } from "react-router-dom"
import { RouteComponentProps } from "react-router";
import Panel from "../components/UI/Panels/Panel";
import { useAction } from "../hooks/useActions";
import { usedTypedSelector } from "../hooks/useTypedSelector";

const ItemPage: React.FC<RouteComponentProps> = ({ match }: any) => {
    const { payload } = usedTypedSelector(state => state.item);
    const { priceItem, error, loading } = usedTypedSelector(state => state.price);
    const { fetchPrice } = useAction();
    const one_item = payload.items.find(elem => elem.name === match.params.id)!;

    useEffect(() => {
        fetchPrice(one_item?.market_hash_name, localStorage.getItem('app') || null, 5)
    }, [fetchPrice, one_item?.market_hash_name])

    if (loading) return <h1>Загрузка</h1>
    if (error) return <Panel type={'danger mt-5'}>Возникла ошибка. Попробуйте заново.</Panel>

    return (
        <div className="content">
            {
                one_item ?
                    <div className="item-page">
                        <div className="item-page-left">
                            <div className="item-image">
                                <img src={'https://community.akamai.steamstatic.com/economy/image/' + one_item.icon_url + '/360fx360f'} alt={one_item.name} />
                            </div>
                        </div>
                        <div className="item-page-right">
                            <div className="item-description">
                                <h1>{one_item.name}</h1>
                                <p>Количество: {one_item.count} шт.</p>
                                <p>Редкость: {one_item.rarity[0]?.localized_tag_name}</p>
                                <p>Цена продажи в Steam: {priceItem?.lowest_price}</p>
                                <p>Цена продажи в других магазинах: {one_item.price} руб.</p>
                            </div>
                        </div>
                    </div>
                    : <Panel type={'danger mt-5 text-center'}>Предмет не найден. <br /><Link to="/">Вернуться назад</Link></Panel>
            }
        </div>
    )
}

export default ItemPage;