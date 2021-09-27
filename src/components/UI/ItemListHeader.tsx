import { useState } from "react";
import { useAction } from "../../hooks/useActions";
import { Items } from "../../types/types";

interface IHeaderProps {
    items: Items[]
}

const ItemListHeader: React.FC<IHeaderProps> = ({ items }) => {
    const { sortUP, sortDOWN, sortItemsName, sortItemsNameReverse } = useAction();
    const [isSortName, setSortItemsName] = useState({ isSort: false, iconArrow: [''] });
    const [isSortCount, setSortItemsCount] = useState({ isSort: false, iconArrow: [''] });

    const sortCount = () => {
        if (!isSortCount.isSort) {
            sortUP(items);
            setSortItemsCount({ isSort: true, iconArrow: ['▲'] });
        } else {
            sortDOWN(items);
            setSortItemsCount({ isSort: false, iconArrow: ['▼'] });
        }
    }

    const sortName = () => {
        if (!isSortName.isSort) {
            sortItemsName(items);
            setSortItemsName({ isSort: true, iconArrow: ['▲'] });
        } else {
            sortItemsNameReverse(items);
            setSortItemsName({ isSort: false, iconArrow: ['▼'] });
        }
    }

    return (
        <div className="item-listing-header">
            <div className="item-listing-header-name" onClick={sortName}>
                <span>название</span>
                <span className="sort-arrow">{isSortName.iconArrow}</span>
            </div>
            <div className="item-listing-header-rarity">
                <span>Редкость</span>
                <span className="sort-arrow">{isSortName.iconArrow}</span>
            </div>
            <div className="item-listing-header-count" onClick={sortCount}>
                <span>кол-во</span>
                <span className="sort-arrow">{isSortCount.iconArrow}</span>
            </div>
        </div>
    )
}

export default ItemListHeader;