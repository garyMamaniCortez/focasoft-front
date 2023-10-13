import React from "react";
import "./afiche.css"
function Afiche(props){
    return(
        <div>
            <img className="imagenAfiche" src={props.src} alt="" />
        </div>
    );
}
export default Afiche;