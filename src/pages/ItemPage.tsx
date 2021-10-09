import { useEffect } from "react";
import { Link } from "react-router-dom"
import { RouteComponentProps } from "react-router";
import Panel from "../components/UI/Panels/Panel";
import { useAction } from "../hooks/useActions";
import { usedTypedSelector } from "../hooks/useTypedSelector";
import { Items } from "../types/types";

const appImage = {
    '753': 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/753/135dc1ac1cd9763dfc8ad52f4e880d2ac058a36c.jpg',
    '440': 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/440/e3f595a92552da3d664ad00277fad2107345f743.jpg',
    '730': 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/69f7ebe2735c366c65c0b33dae00e12dc40edbe4.jpg',
    '570': 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/570/0bbb630d63262dd66d2fdd0f7d37e8661a410075.jpg',
    '583950': 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/583950/dee44586fb8e07add8b86bfb59c958071d08b0e2.jpg',
    '433850': 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/433850/aee7491abfd812e2fbb4ec3326ad5f4b85c8137a.jpg',
    '252490': 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/252490/820be4782639f9c4b64fa3ca7e6c26a95ae4fd1c.jpg',
    '304930': 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/304930/e18009fb628b35953826efe47dc3be556b689f4c.jpg',
    '218620': 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/218620/a6abc0d0c1e79c0b5b0f5c8ab81ce9076a542414.jpg',
    '238460': 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/238460/2f258aaff583d797812cdcf24830d5992f48733b.jpg',
    '321360': 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/321360/0c9f64ffe631efcc1c7367742e0a57258cb6278e.jpg',
    '232090': 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/232090/15837cefb378766e9916548f8591b6eb490b9e52.jpg',
    '322330': 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/322330/a80aa6cff8eebc1cbc18c367d9ab063e1553b0ee.jpg',
    '578080': 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/578080/609f27278aa70697c13bf99f32c5a0248c381f9d.jpg'
} as IAppObject

interface IAppObject {
    [app: string]: string
}

const ItemPage: React.FC<RouteComponentProps> = ({ match }: any) => {
    const { payload } = usedTypedSelector(state => state.item);
    const { priceItem, error, loading } = usedTypedSelector(state => state.price);
    const { fetchPrice } = useAction();
    const one_item: Items = payload.items.find(elem => elem.name === match.params.id)!;

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
                                <img src={'https://community.akamai.steamstatic.com/economy/image/' + one_item.icon_url + '/360fx360f'} className="item-image-screen" alt={one_item.name} />
                            </div>
                        </div>
                        <div className="item-page-right">
                            <div className="item-description">
                                <h1>{one_item.name}</h1>
                                <div className="item-description-header">
                                    <img src={appImage[payload.app!]} className="item-image-screen" alt={payload.app} />
                                    <p>{one_item.type ? one_item.type[0].localized_tag_name : ''}, {one_item.type ? one_item.quality[0].localized_tag_name : ''}</p>
                                </div>

                                <p>Количество шт. в инвентаре: {one_item.count}</p>
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