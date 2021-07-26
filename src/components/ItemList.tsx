import Item from './item'
import {Items} from '../types/types'
import { usedTypedSelector } from "../hooks/useTypedSelector"
import usePagination from "../hooks/usePagination"
import Pagination from "./Paginations"
import { useSort } from "../hooks/useSort"
import { useRef } from 'react'


const ItemList: React.FC = () => {
    const {error, items, loading} = usedTypedSelector(state => state.item)
    const {searchValue} = usedTypedSelector(state => state.search)
    const [iconArrow, sortItems] = useSort(items)
    const filtredItems = items.filter((item) =>item.name.toLowerCase().includes(searchValue))
    const [currentPage, currentItems, itemsPerPage, index, paginate, countItems] = usePagination(filtredItems)
    const {indexOfLastItem, indexOfFirstItem} = index
    const countRef = useRef<HTMLSpanElement>(null)
    const nameRef = useRef<HTMLSpanElement>(null)

    if (loading) return <h1>Идет загрузка</h1>
    if (error) return <h1>{error}</h1>
    if(!items.length) return <p>Введите свой Steam ID</p>

    return(
        <>
        {
            currentItems.length?
            <div>
            <div className="item-listing-header">
                <div className="item-listing-header-name" onClick={() => sortItems('name', nameRef)}>
                    <span>название</span>
                    <span className="sort-arrow-name" ref={nameRef}>{iconArrow}</span>
                    </div>
                <div className="item-listing-header-count" onClick={() => sortItems('count', countRef)}>
                    <span>кол-во</span>
                    <span ref={countRef} className="sort-arrow-count">{iconArrow}</span>
                </div>
            </div>
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