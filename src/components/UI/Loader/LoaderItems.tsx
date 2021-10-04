import { MdViewHeadline, MdViewModule } from "react-icons/md";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonItems: React.FC = () => {
    return (
        <>
            <SkeletonTheme color="#00000033" highlightColor="#8F98A0">
                <div className="selectedGame">
                    <Skeleton height={64} width={64} className="selectedGame-img" />
                    <Skeleton height={64} width={552} className="selectedGame-name" />
                </div>
                <div className="list-header">
                    <Skeleton width={328} height={14} style={{ marginLeft: "10px" }} />
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