import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { usedTypedSelector } from "../hooks/useTypedSelector"
import { fetchPrice } from "../redux/store/action/priceActons"


const ItemPage:React.FC = ({match}:any) => {
    const {items} = usedTypedSelector(state => state.item)
    const {item} = usedTypedSelector(state => state.price)
    const dispatch = useDispatch()

    //Найти элемент в массиве до рендера без useEffect
    const one_item = items.find(elem => elem.name === match.params.id)

    useEffect(()=> {
        dispatch(fetchPrice(one_item.name, 440))
    },[])

    return( 
        <div className="content">
           <div className="row">
               <img src={'https://community.akamai.steamstatic.com/economy/image/'+ one_item.icon_url} className="item-listing-img"  alt="" />
               <h1>{one_item.name}</h1>
               <p>Количество: {one_item.count}</p>
               <p>Цена продажи: {item.sellPrice * one_item.count}</p>
               <p>Цена покупки: {item.buyPrice * one_item.count}</p>
           </div>
        </div>
        
    )
}

export default ItemPage