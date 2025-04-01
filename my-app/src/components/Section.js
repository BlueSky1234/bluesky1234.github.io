export default function Section({children, id, className}) {
    return(
        <>
        <section className={className} id={id}>{children}</section>
        </>
    );
}