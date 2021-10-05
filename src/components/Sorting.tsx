import React from "react";
import { useState } from "react";
import { useAction } from "../hooks/useActions";
import { Items } from "../types/types";

interface IHeaderProps {
    items: Items[]
}

const Sorting: React.FC<IHeaderProps> = ({ items }) => {
    const { sortCountItems, sortRarityItems, sortItemsName, itemsReverse } = useAction();
    const [isSortName, setSortItemsName] = useState({ isSort: false, iconArrow: [''] });
    const [isSortCount, setSortItemsCount] = useState({ isSort: false, iconArrow: [''] });
    const [isSortRarity, setSortItemsRarity] = useState({ isSort: false, iconArrow: [''] });

    const sortCount = () => {
        if (!isSortCount.isSort) {
            sortCountItems(items);
            setSortItemsCount({ isSort: true, iconArrow: ['▲'] });
        } else {
            itemsReverse(items);
            setSortItemsCount({ isSort: false, iconArrow: ['▼'] });
        }
    }

    const sortName = () => {
        if (!isSortName.isSort) {
            sortItemsName(items);
            setSortItemsName({ isSort: true, iconArrow: ['▲'] });
        } else {
            itemsReverse(items);
            setSortItemsName({ isSort: false, iconArrow: ['▼'] });
        }
    }

    const sortRarity = () => {
        if (!isSortRarity.isSort) {
            sortRarityItems(items);
            setSortItemsRarity({ isSort: true, iconArrow: ['▲'] })
        } else {
            itemsReverse(items);
            setSortItemsRarity({ isSort: false, iconArrow: ['▼'] });
        }
    }

    return (
        <div className="sorting">
            <div className="sorting-text">
                <span>сортировать по:</span>
            </div>
            <div className="sorting-name" onClick={sortName}>
                <span>названию</span>
                <span className="sort-arrow">{isSortName.iconArrow}</span>
            </div>
            <div className="sorting-rarity" onClick={sortRarity}>
                <span>редкости</span>
                <span className="sort-arrow">{isSortRarity.iconArrow}</span>
            </div>
            <div className="sorting-count" onClick={sortCount}>
                <span>кол-ву</span>
                <span className="sort-arrow">{isSortCount.iconArrow}</span>
            </div>
        </div>
    )
}

export default React.memo(Sorting);