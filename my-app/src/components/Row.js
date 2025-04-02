export default function Row({children, className = "row"}) {
    return (<div className={className}>{children}</div>);
}