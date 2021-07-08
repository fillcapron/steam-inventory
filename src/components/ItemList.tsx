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
    const [currentPage, currentItems, itemsPerPage, index, paginate] = usePagination(items)
    const {indexOfLastItem, indexOfFirstItem} = index
    const [sortItems, setSortItems] = useState(false)
    const [iconArrow, setIconArrow] = useState([''])
    
    const dispatch = useDispatch()

    if (loading) return <h1>Идет загрузка</h1>
    if (error) return <h1>{error}</h1>

    const sortCount = () => {
        !sortItems
        ?(() => (dispatch(sortUP(items)), setSortItems(true), setIconArrow(['&#9650;'])))()
        : (() => (dispatch(sortDOWN(items)), setSortItems(false), setIconArrow(['&#9660;'])))()
   }

    return(
        <div>
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
            :'Нет предметов в инвенторе'
            }
        <Pagination
                currentPage={currentPage} 
                paginate={paginate} 
                itemsPerPage={itemsPerPage} 
                totalItems={items.length}
                resultSearchNum={{indexOfLastItem, indexOfFirstItem}}
                />
        </div>
        : 'Введите свой Steam ID'
        }
        </div>
    )
}

export default ItemList