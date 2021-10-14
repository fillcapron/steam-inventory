interface IPanelProps {
    type?: string,
    children?: any
}

const Panel: React.FC<IPanelProps> = ({ type, children }) => {
    return (
        <div className={"panel-mini panel-mini-" + type}>
            <p>
                {children}
            </p>
        </div>
    )
}
export default Panel;