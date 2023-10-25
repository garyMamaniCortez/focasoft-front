import React from "react";
import "./afiche.css"
function Afiche(props){
    return(
        <div>
            <img className="imagenAfiche" src={props.src} alt="El evento no tiene afiche" />
        </div>
    );
}
export default Afiche;