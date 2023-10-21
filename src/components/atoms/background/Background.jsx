import './Background.css'

const Background = ({children, tamback}) => {
    
    return(
        <div className={tamback = `${
            tamback === "backgroundpeq" ? "backgroundpeq" :"background"
            }
        }`}>
            {children}
        </div>
    );
}

export default Background

