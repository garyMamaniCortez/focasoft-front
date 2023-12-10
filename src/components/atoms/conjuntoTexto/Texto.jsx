import React from "react";
import "./texto.css"
function Texto(props){
return(
    <div className="textContent">
        <p className="categoryEvent">{props.title}</p>
        <p className="titleEvent ">{props.category}</p>
        <p>Fecha: {props.date}</p>
        <p>{props.description}</p>

    </div>
);
}
export default Texto;