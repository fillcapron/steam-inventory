import { Link } from "react-router-dom";
import { Items } from "../types/types";

interface IProps {
    items: Items[]
}

const ItemListGrid: React.FC<IProps> = ({ items }) => {
    return (
        <div className="list-grid">
            {items.map((item, i) => (
                <Link className="list-grid-item" to={`/item/${item.name}/${item.classid}`} key={i}>
                    <img src={'https://community.akamai.steamstatic.com/economy/image/' + item.icon_url + '/62fx62f'} alt="..." />
                    <span style={{ color: '#' + item.type.color }}>{item.name.length > 12 ? item.name.slice(0, 12) + '...' : item.name}</span>
                </Link>))}
        </div>

    )
}
export default ItemListGrid;