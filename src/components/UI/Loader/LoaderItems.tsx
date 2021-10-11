import { MdViewHeadline, MdViewModule } from "react-icons/md";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonItems: React.FC = () => {
    return (
        <>
            <SkeletonTheme color="#00000033" highlightColor="#8F98A0">
                <div className="selectedGame">
                    <Skeleton height={64} width={64} className="selectedGame-img" />
                    <div className="selectedGame-name"><Skeleton width={200} height={70} className="selectedGame-name" /></div>
                </div>
                <div className="list-header">
                    <Skeleton height={14} style={{ marginLeft: 10, minWidth: 250 }} />
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
                        <SkeletonTheme color="#00000033" highlightColor="#8F98A0" key={index}>
                            <Skeleton className="item-listing-row" />
                        </SkeletonTheme>
                    ))
            }
        </>
    )
}

export default SkeletonItems;