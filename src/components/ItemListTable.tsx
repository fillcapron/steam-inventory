import React from "react";
import { Link } from 'react-router-dom';
import usePagination from "../hooks/usePagination";
import { Items } from '../types/types';
import Pagination from "./Paginations";
import Panel from "./UI/Panels/Panel";

interface ItemsProps {
    items: Items[],
}

const ItemListTable: React.FC<ItemsProps> = ({ items }) => {
    const [currentPage, currentItems, itemsPerPage, index, paginate, countItems] = usePagination(items, 10);
    const { indexOfLastItem, indexOfFirstItem } = index;

    return (
        <>
            {
                currentItems.length ?
                    currentItems.map((item: Items, i: number) => (
                        <Link className="item-listing-row-link" to={`/item/${item.name}/${item.classid}`} key={i}>
                            <div className="item-listing-row" >
                                <img src={'https://community.akamai.steamstatic.com/economy/image/' + item.icon_url + '/62fx62f'} className="item-listing-img" alt="..." />
                                <div className="item-listing-name-block">
                                    <span className="item-listing-name">{item.name.length > 22 ? item.name.slice(0, 22) + '...' : item.name}</span>
                                </div>
                                <div className="item-listing-rarity"><span style={{ color: '#' + item.type.color }}>{item.type.localized_tag_name}</span></div>
                                <div className="item-listing-price">{item.price ? `${item.price} руб.` :''}</div>
                                <div className="item-listing-count">x{item.count}</div>
                            </div>
                        </Link>
                    ))
                    : <Panel type={'info mt-2 text-center'}>Предметов не найдено</Panel>}
            <Pagination
                currentPage={currentPage}
                paginate={paginate}
                itemsPerPage={itemsPerPage}
                countItems={countItems}
                resultSearchNum={{ indexOfLastItem, indexOfFirstItem }}
            />
        </>
    )
}
export default ItemListTable;