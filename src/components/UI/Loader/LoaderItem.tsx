import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonItem: React.FC = () => {

    return (
        <SkeletonTheme color="#00000033" highlightColor="#8F98A0">
            <div className="content">
                <div className="item-page">
                        <Skeleton  width={100} height={100} style={{ minWidth: 970, minHeight: 360 }} />
                </div>
            </div>
        </SkeletonTheme>
    )
}

export default SkeletonItem;