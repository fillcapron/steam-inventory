import { usedTypedSelector } from "../../hooks/useTypedSelector"


const ItemPage:React.FC = ({match}:any) => {
    const {items} = usedTypedSelector(state => state.item)
 
    //Найти элемент в массиве до рендера без useEffect
    const item = items.find(elem => { if(elem.name === match.params.id) return elem})

    return( 
        <div className="container">
           <div className="row">
               <img src={'https://community.akamai.steamstatic.com/economy/image/'+item.icon_url} className="img" alt="" />
               <h1>{item.name}</h1>
               <p>Количество: {item.count}</p>
           </div>
        </div>
        
    )
}

export default ItemPage