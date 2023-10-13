import React from "react";
import "./texto.css"
function Texto(props){
return(
    <div className="textContent">
        <p className="categoryEvent">{props.category}</p>
        <p className="titleEvent">{props.title}</p>
        <p>Fecha: {props.date}</p>
        <p>{props.description}</p>

    </div>
);
}
export default Texto;