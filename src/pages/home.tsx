import React, { useEffect, useState} from "react"
import { useDispatch } from "react-redux"
import { fetchItems } from "../redux/store/action/itemsActions"
import Input from '../components/input'
import ItemList from '../components/ItemList'

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
            <Input id={id} handler={handler} getInventory={getInventory}/>
            <ItemList/>
        </div>
    )
}

export default Home