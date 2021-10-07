import { Link } from "react-router-dom";
import usePagination from "../hooks/usePagination";
import { Items } from "../types/types";
import Pagination from "./Paginations";
import Panel from "./UI/Panels/Panel";

interface IProps {
    items: Items[]
}

const ItemListGrid: React.FC<IProps> = ({ items }) => {
    const [currentPage, currentItems, itemsPerPage, index, paginate, countItems] = usePagination(items, 20);
    const { indexOfLastItem, indexOfFirstItem } = index;

    return (
        <>
            {
                currentItems.length ?
                    <div className="list-grid">
                        {
                            currentItems.map((item, i) => (
                                <Link className="list-grid-item" to={`/item/${item.name}/${item.classid}`} key={i}>
                                    <div className="item-head">
                                        <span style={{ color: '#' + item.rarity[0]?.color }} className="item-head-count">{'x' + item.count}</span>
                                        <span className="item-head-price">{item.price ? item.price + ' руб.' : ''}</span>
                                    </div>
                                    <img src={'https://community.akamai.steamstatic.com/economy/image/' + item.icon_url + '/62fx62f'} alt="..." />
                                    <span style={{ color: '#' + item.rarity[0]?.color }}>{item.name.length > 12 ? item.name.slice(0, 12) + '...' : item.name}</span>
                                </Link>))
                        }
                    </div>
                    : <Panel type={'info mt-2 text-center'}>Предметов не найдено</Panel>
            }
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
export default ItemListGrid;