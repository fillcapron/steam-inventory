import {useState} from "react"
import { useDispatch } from "react-redux"
import Item from './item'
import {Items} from '../types/types'
import { usedTypedSelector } from "../hooks/useTypedSelector"
import usePagination from "../hooks/usePagination"
import Pagination from "./Paginations"
import { sortDOWN, sortUP } from "../redux/store/action/itemsActions"

const ItemList: React.FC = () => {
    const {error, items, loading} = usedTypedSelector(state => state.item)
    const {searchValue} = usedTypedSelector(state => state.search)
    const filtredItems = items.filter((item) =>item.name.toLowerCase().includes(searchValue))
    const [currentPage, currentItems, itemsPerPage, index, paginate, countItems] = usePagination(filtredItems)
    const {indexOfLastItem, indexOfFirstItem} = index
    const [sortItems, setSortItems] = useState(false)
    const [iconArrow, setIconArrow] = useState([''])
    
    const dispatch = useDispatch()

    if (loading) return <h1>Идет загрузка</h1>
    if (error) return <h1>{error}</h1>

    const sortCount = () => {
        if (!sortItems) {
            dispatch(sortUP(items))
            setSortItems(true)
            setIconArrow(['▲'])
        } else {
            dispatch(sortDOWN(items))
            setSortItems(false)
            setIconArrow(['▼'])
        }
   }
   
    return(
        <>
        {
            items.length ?
            <div>
            <div className="item-listing-header">
                <div className="item-listing-header-name">
                    <span>название</span>
                    </div>
                <div className="item-listing-header-count" onClick={sortCount}>
                    <span>кол-во</span>
                    <span className="sort-arrow">{iconArrow}</span>
                </div>
            </div>
            {
            currentItems.length? 
            currentItems.map((elem:Items, i:number) => <Item item={elem} key={i}/>)
            :'Нет предметов в инвентаре'
            }
        <Pagination
                currentPage={currentPage} 
                paginate={paginate} 
                itemsPerPage={itemsPerPage} 
                countItems={countItems}
                resultSearchNum={{indexOfLastItem, indexOfFirstItem}}
                />
        </div>
        : 'Введите свой Steam ID'
        }
        </>
    )
}

export default ItemList