import React from "react";
import "./afiche.css"
function Afiche(props){
    return(
        <div>
            <img className={props.Class==null ? "imagenAfiche" : props.Class} src={props.src} alt="El evento no tiene afiche" />
        </div>
    );
}
export default Afiche;