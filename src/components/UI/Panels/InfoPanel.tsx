interface IPanelProps {
    title?: string,
    children?: any
}

const PanelInfo: React.FC<IPanelProps> = ({ title, children }) => {
    return (
        <div className="panel panel-info">
            {
                title ?
                    <div className="panel-header">
                        <h3 className="panel-title">{title}</h3>
                    </div>
                    : []
            }
            <div className="panel-body">
                {children}
            </div>
        </div>
    )
}
export default PanelInfo;