export default function Col({className = "12", children}) {
    return(
        <div className={"col-md-" + className}>
            {children}
        </div>        
    );
}