import { useEffect, useCallback } from "react"
import { useDispatch } from "react-redux"
import { usedTypedSelector } from "../hooks/useTypedSelector"
import { fetchPrice } from "../redux/store/action/priceActons"

const ItemPage:React.FC = ({match}:any) => {
    const {items} = usedTypedSelector(state => state.item)
    const {priceItem} = usedTypedSelector(state => state.price)
    const dispatch = useDispatch()

    const one_item = items.find(elem => elem.name === match.params.id)
    
    const getPrice = useCallback(()=>{
        dispatch(fetchPrice(one_item.name, 440))
    }, [dispatch, one_item])
    
    useEffect(()=> {
        getPrice()
    }, [getPrice])

    return( 
        <div className="content">
            {
                one_item ?
                <div className="row">  
                        <img src={'https://community.akamai.steamstatic.com/economy/image/'+ one_item.icon_url} className="item-listing-img"  alt="" />
                        <h1>{one_item.name}</h1>
                        <p>Количество: {one_item.count}</p>
                        <p>Цена продажи: {priceItem.sellPrice? priceItem.sellPrice * one_item.count: 'Загрузка'}</p>
                        <p>Цена покупки: {priceItem.buyPrice? priceItem.buyPrice * one_item.count: 'Загрузка'}</p>
                    </div>
                    : 'Загрузка'
            }           
        </div>
    )
}

export default ItemPage