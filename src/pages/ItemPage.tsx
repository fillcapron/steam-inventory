import { useEffect } from "react";
import { Link } from "react-router-dom"
import { RouteComponentProps, useHistory } from "react-router";
import Panel from "../components/UI/Panels/Panel";
import { useAction } from "../hooks/useActions";
import { usedTypedSelector } from "../hooks/useTypedSelector";
import { Items } from "../types/types";
import SkeletonItem from "../components/UI/Loader/LoaderItem";
import ReactHtmlParser from 'react-html-parser';

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
    const history = useHistory();
    const { fetchPrice } = useAction();

    let one_item: Items = payload.items.find(elem => elem.name === match.params.id)!;
    const app = localStorage.getItem('app')!;

    if (one_item) {
        sessionStorage.setItem('lastItem', JSON.stringify(one_item));
    } else {
        one_item = JSON.parse(sessionStorage.getItem('lastItem')!);
    }

    useEffect(() => {
        fetchPrice(one_item?.market_hash_name, app, 5)
    }, [fetchPrice, one_item?.market_hash_name, app])

    if (loading) return <SkeletonItem />
    if (error) return <Panel type={'danger mt-5 text-center'}>Возникла ошибка. Попробуйте заново.<br /><Link to="/">Вернуться назад</Link></Panel>

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
                                    <img src={appImage[app]} alt={app} width="32px" height="32px" />
                                    <p>{one_item.type ? one_item.type[0]?.localized_tag_name : ''}, {one_item.quality ? one_item.quality[0]?.localized_tag_name : ''}<br /><span style={{ color: '#' + one_item.rarity[0]?.color }}>{one_item.rarity[0]?.localized_tag_name}</span> {one_item.meta ? one_item.meta[0]?.localized_tag_name : ''}</p>
                                </div>
                                <div className="item-description-describe">
                                {one_item.descriptions.map((elem, i) => {
                                    return (<div key={i}>{ReactHtmlParser(elem.value)}</div>)
                                })}
                                </div>
                                <p>Количество "шт." в инвентаре:  <span className="item-description-values">{one_item.count}</span></p>
                                <p>Цена в Steam: <span className="item-description-values">{priceItem?.lowest_price}</span></p>
                                <p>Цена на других площадках:  <span className="item-description-values">{one_item.price} руб.</span></p>
                                <button className="btn btn-success mt-3" onClick={() => history.goBack()}>Вернуться назад</button>
                            </div>
                        </div>
                    </div>
                    : <Panel type={'danger mt-5 text-center'}>Предмет не найден. <br /><Link to="/">Вернуться назад</Link></Panel>
            }
        </div>
    )
}

export default ItemPage;