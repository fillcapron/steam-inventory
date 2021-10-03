import { MdViewHeadline, MdViewModule } from "react-icons/md";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonItems: React.FC = () => {
    return (
        <>
            <SkeletonTheme color="#8F98A0" highlightColor="#D2D2D2">
                <div className="list-header">
                    <Skeleton width={328} height={14} style={{marginLeft: "10px"}} />
                    <div className="list-mode">
                        <MdViewHeadline className="list-mode-table" />
                        <MdViewModule className="list-mode-grid" />
                    </div>
                </div>
            </SkeletonTheme>
            {
                Array(10)
                    .fill(0)
                    .map((_, index) => (
                        <SkeletonTheme color="#8F98A0" highlightColor="#D2D2D2" key={index}>
                            <div className="item-listing-row">
                                <Skeleton height={32} width={32} className="item-listing-img" />
                                <div className="item-listing-name-block">
                                    <span className="item-listing-name"><Skeleton width={220} /></span>
                                </div>
                                <div className="item-listing-rarity"><Skeleton width={120} /></div>
                                <div className="item-listing-count"><Skeleton width={80} /></div>
                            </div>
                        </SkeletonTheme>
                    ))
            }
        </>
    )
}

export default SkeletonItems;