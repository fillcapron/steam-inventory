import React, { useEffect, useState} from "react"
import { useDispatch } from "react-redux"
import { fetchItems } from "../redux/store/action/itemsActions"
import Input from '../components/inputFetch'
import ItemList from '../components/ItemList'
import Sidebar from "../components/blocks/sidebar"

const Home: React.FC = () => {

    const [id, setId] = useState('')
    const dispatch = useDispatch()
    const handler = (e: any) => setId(e.target.value)

    useEffect(()=> {
       setId(localStorage.getItem('id') || '')
    }, [])

    async function getInventory(){
        localStorage.setItem('id', id)
        dispatch(fetchItems(id))
    }

    return(
        <div className="content">
            <div className="row">
                <Input id={id} handler={handler} getInventory={getInventory}/>
                <div className="col-8">
                    <ItemList/>
                </div>
                <div className="col-3">
                    <div className="item-search">
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home