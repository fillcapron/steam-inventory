import React, { useEffect, useState} from "react"
import { useDispatch } from "react-redux"
import { usedTypedSelector } from "../../hooks/useTypedSelector"
import { fetchItems } from "../../store/action/item"
import ItemList from './component/ItemList'
import Pagination from "../../components/Paginations"


const Home: React.FC = () => {
    const {error, items, loading} = usedTypedSelector(state => state.item)
    const [id, setId] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const dispatch = useDispatch()
    const handler = (e: any) => setId(e.target.value)

    useEffect(()=> {
       setId(localStorage.getItem('id') || '')
    }, [])

    async function getInventory(){
        localStorage.setItem('id', id)
        dispatch(fetchItems(id))
    }

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)
    
    const paginate = (pageNumber:any) => setCurrentPage(pageNumber)

    return(
        <div className="content">
            <div className="input-group mb-3 mt-3">
                <input type="text" className="form-control" value={id} onChange={(e)=> handler(e)} placeholder="Введите свой SteamID"/>
                <button className="btn btn-success" onClick={() => getInventory()}>Fetch</button>
            </div>
            {
                items.length ?
                <div>
                <div className="item-listing-header">
                <div className="item-listing-header-name">
                    <span>название</span>
                    </div>
                <div className="item-listing-header-count">
                    кол-во
                </div>
                </div>
                <ItemList props={{currentItems, loading, error}}/>
                <Pagination
                currentPage={currentPage} 
                paginate={paginate} 
                itemsPerPage={itemsPerPage} 
                totalItems={items.length}
                resultSearchNum={{indexOfLastItem,indexOfFirstItem}}
                />
                </div> :
                <p>Введите свой Steam id</p>
            }
            
        </div>
    )
}

export default Home