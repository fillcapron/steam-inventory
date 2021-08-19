import { useEffect, useCallback } from "react"
import { useDispatch } from "react-redux"
import PanelInfo from "../components/UI/InfoPanel"
import { usedTypedSelector } from "../hooks/useTypedSelector"
import { fetchPrice } from "../redux/store/action/priceActons"

const ItemPage:React.FC = ({match}:any) => {
    const {items} = usedTypedSelector(state => state.item)
    const {priceItem, error, loading} = usedTypedSelector(state => state.price)
    const dispatch = useDispatch()

    const one_item = items.find(elem => elem.name === match.params.id)
    
    const getPrice = useCallback(()=>{
        dispatch(fetchPrice(one_item?.name, 440))
    }, [dispatch, one_item])
    
    useEffect(()=> {
        getPrice()
    }, [getPrice])
    if(error) return <PanelInfo title="Ошибка">Возникла ошибка при загрузке. Перейти на главную</PanelInfo>
    if(loading) return <PanelInfo title="Загрузка">Загрузка</PanelInfo>
    return( 
        <div className="content">
            {
                one_item ?
                <div className="item-page"> 
                        <div className="item-page-left">
                            <div className="item-image">
                                <img src={'https://community.akamai.steamstatic.com/economy/image/'+ one_item.icon_url +'/360fx360f'} alt={one_item.name} />
                            </div>
                        </div>
                        <div className="item-page-right">
                            <div className="item-description">
                            <h1>{one_item.name}</h1>
                            <p>Количество: {one_item.count}</p>
                            <p>Цена продажи: {priceItem.sellPrice? priceItem.sellPrice * one_item.count: 'Загрузка'}</p>
                            </div>
                        </div>
                </div>
                : 'Загрузка'
            }       
        </div>
    )
}

export default ItemPage