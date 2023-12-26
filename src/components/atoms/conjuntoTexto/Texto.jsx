import React from "react";
import "./texto.css"
import { Link } from "react-router-dom";
function Texto(props){
return(
    <div className="textContent">
        <p className="categoryEvent">{props.title}</p>
        <p className="titleEvent ">{props.category}</p>
       <div className="miURL">
       <a href={`//${props.url}`} className="url" target="_blank" rel="noopener noreferrer" >
        <p className="url">{props.url}</p>
        </a>
       </div>
        <p>Fecha: {props.date}</p>
        <p>{props.description}</p>

    </div>
);
}
export default Texto;