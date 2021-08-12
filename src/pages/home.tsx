import React from "react"
import { useDispatch } from "react-redux"
import { fetchItems } from "../redux/store/action/itemsActions"
import Input from '../components/inputFetch'
import ItemList from '../components/ItemList'
import Sidebar from "../components/blocks/sidebar"

const Home: React.FC = () => {
    const dispatch = useDispatch()
    async function getInventory(id:string){
        localStorage.setItem('id', id)
        dispatch(fetchItems(id))
    }
    return(
        <div className="content">
            <div className="row mt-5">
                <Input getInventory={getInventory}/>
                <div className="main">
                    <ItemList/>
                </div>
                <div className="sidebar">
                    <div className="item-search">
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home