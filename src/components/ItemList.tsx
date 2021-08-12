import Item from './item'
import {Items} from '../types/types'
import { usedTypedSelector } from "../hooks/useTypedSelector"
import usePagination from "../hooks/usePagination"
import Pagination from "./Paginations"
import ItemListHeader from './UI/ItemListHeader'
import PanelInfo from './UI/panel'

const ItemList: React.FC = () => {
    const {error, items, loading} = usedTypedSelector(state => state.item)
    const {searchValue} = usedTypedSelector(state => state.search)
    const filtredItems = items.filter((item) =>item.name.toLowerCase().includes(searchValue))
    const [currentPage, currentItems, itemsPerPage, index, paginate, countItems] = usePagination(filtredItems)
    const {indexOfLastItem, indexOfFirstItem} = index

    if (loading) return <h1>Идет загрузка</h1>
    if (error) return <h1>{error}</h1>
    if(!items.length) return <PanelInfo title="Введите свой STEAM ID">ПРОВЕРКА ПРОВЕРКА</PanelInfo>

    return(
        <>
        {
            currentItems.length?
            <div>
            <ItemListHeader items={items}/>
            {
            currentItems.map((elem:Items, i:number) => <Item item={elem} key={i}/>)
            }
            <Pagination
                currentPage={currentPage} 
                paginate={paginate} 
                itemsPerPage={itemsPerPage} 
                countItems={countItems}
                resultSearchNum={{indexOfLastItem, indexOfFirstItem}}
            />
            </div>
            : 'Нет предметов в инвентаре'
        }
        </>
    )
}

export default ItemList