import React from "react";
import { Link } from 'react-router-dom';
import { Items } from '../types/types';

interface ItemsProps {
    items: Items[],
}

const ItemListTable: React.FC<ItemsProps> = ({ items }) => {

    return (
        <>
            {items.map((item: Items, i: number) => (
                <Link className="item-listing-row-link" to={`/item/${item.name}/${item.classid}`} key={i}>
                    <div className="item-listing-row" >
                        <img src={'https://community.akamai.steamstatic.com/economy/image/' + item.icon_url + '/62fx62f'} className="item-listing-img" alt="..." />
                        <div className="item-listing-name-block">
                            <span className="item-listing-name">{item.name.length > 22 ? item.name.slice(0, 22) + '...' : item.name}</span>
                        </div>
                        <div className="item-listing-rarity"><span style={{ color: '#' + item.type.color }}>{item.type.localized_tag_name}</span></div>
                        <div className="item-listing-count">{item.count}</div>
                    </div>
                </Link>
            ))}
        </>
    )
}
export default ItemListTable;