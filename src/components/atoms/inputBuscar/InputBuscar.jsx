import React from "react";
import lupa from "./lupa.png"
import "./inputBuscar.css"
function InputBuscar(props){
    return(
        <div className="inputBuscarContent">
            <input className="inputB" name="hola" type="search"  placeholder={props.text} onChange={props.Modificar} onKeyPress={props.TeclaPresionada}/>
            
            <img src={lupa} />
        </div>
    );
}
export default InputBuscar;