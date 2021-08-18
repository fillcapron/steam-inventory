import React from "react"
import {Link} from 'react-router-dom'
import {Items} from '../types/types'


type TProps = {
    item: Items  
}

const Item:React.FC<TProps> = ({item}) => {
    return( 
        <Link className="item-listing-row-link" to={`/item/${item.name}/${item.classid}`}>
        <div className="item-listing-row">
            <img src={'https://community.akamai.steamstatic.com/economy/image/'+item.icon_url+'/62fx62f'} className="item-listing-img"  alt="..." />
        <div className="item-listing-name-block">
            <span className="item-listing-name">{item.name}</span></div>
        <div className="item-listing-count">{item.count}</div>
        </div>
        </Link>
    )
}

export default Item