import Item from './item'
import {Items} from '../../../types/types'

type TProps = {
    props:  string | boolean | any
}

const ItemList: React.FC<TProps> = ({props}) => {
    const {error, currentItems, loading} = props
   
    if (loading){
        return <h1>Идет загрузка</h1>
    }
    if (error){
        return <h1>{error}</h1>
    }
    return(
        <div>
        {currentItems.length? currentItems.map((elem:Items, i:number) => {
            return (
            <Item item={elem} key={i}/>
            )}):'Нет предметов в инвенторе'}
        </div>
    )
}

export default ItemList