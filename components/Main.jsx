
const Main = ({ children, ...props  }) => {

    return(
        <div className="main-center" {...props}>
            {children}
        </div>
    );
}

export default Main;