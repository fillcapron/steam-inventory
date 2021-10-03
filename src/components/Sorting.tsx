import React from "react";
import { useState } from "react";
import { useAction } from "../hooks/useActions";
import { Items } from "../types/types";

interface IHeaderProps {
    items: Items[]
}

const Sorting: React.FC<IHeaderProps> = ({ items }) => {
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
        <div className="sorting">
            <div className="sorting-text">
                <span>сортировать по:</span>
            </div>
            <div className="sorting-name" onClick={sortName}>
                <span>название</span>
                <span className="sort-arrow">{isSortName.iconArrow}</span>
            </div>
            <div className="sorting-rarity">
                <span>редкость</span>
                <span className="sort-arrow"></span>
            </div>
            <div className="sorting-count" onClick={sortCount}>
                <span>кол-во</span>
                <span className="sort-arrow">{isSortCount.iconArrow}</span>
            </div>
        </div>
    )
}

export default React.memo(Sorting);