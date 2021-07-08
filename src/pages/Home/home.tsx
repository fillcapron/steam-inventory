import React, { useEffect, useState} from "react"
import { useDispatch } from "react-redux"
import { usedTypedSelector } from "../../hooks/useTypedSelector"
import { fetchItems, sortUP, sortDOWN } from "../../redux/store/action/itemsActions"
import usePagination from "../../hooks/usePagination"
import Input from './component/input'
import ItemList from './component/ItemList'
import Pagination from "../../components/Paginations"



const Home: React.FC = () => {
    const {error, items, loading} = usedTypedSelector(state => state.item)
    const [id, setId] = useState('')
    const [currentPage, currentItems, itemsPerPage,index, paginate] = usePagination(items)
    const {indexOfLastItem, indexOfFirstItem} = index
    const [sortItems, setSortItems] = useState(false)
    const [iconArrow, setIconArrow] = useState([''])
    const dispatch = useDispatch()
 

    const handler = (e: any) => setId(e.target.value)

    useEffect(()=> {
       setId(localStorage.getItem('id') || '')
    }, [])

    async function getInventory(){
        localStorage.setItem('id', id)
        dispatch(fetchItems(id))
    }

   const sortCount = () => {
        !sortItems
        ?(() => (dispatch(sortUP(items)), setSortItems(true), setIconArrow(['&#9650;'])))()
        : (() => (dispatch(sortDOWN(items)), setSortItems(false), setIconArrow(['&#9660;'])))()
   }
   console.log(error)
    return(
        <div className="content">
            <Input id={id} handler={handler} getInventory={getInventory}/>
            {
                items.length?
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
                <ItemList props={{currentItems, loading, error}}/>
                <Pagination
                currentPage={currentPage} 
                paginate={paginate} 
                itemsPerPage={itemsPerPage} 
                totalItems={items.length}
                resultSearchNum={{indexOfLastItem, indexOfFirstItem}}
                />
                </div>
                :<p>Введите свой Steam id</p>
            }
        </div>
    )
}

export default Home