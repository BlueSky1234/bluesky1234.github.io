export default function Container({content, className}) {
    return(
    <>
    <div className={className}>{content}</div>
    </>
    );
}