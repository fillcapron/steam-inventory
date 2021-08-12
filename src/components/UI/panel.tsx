interface PanelProps {
    title: string,
    children: any
}

const PanelInfo: React.FC<PanelProps> = ({title, children}) => {
    return (
        <div className="panel panel-info">
            <div className="panel-header">
                <h3 className="panel-title">{title}</h3>
            </div>
            <div className="panel-body">
                    {children}
            </div>
        </div>
    )
}
export default PanelInfo;