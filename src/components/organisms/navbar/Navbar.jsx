import React from "react"

import face from "./facebook.png"
import wpp from "./whatsapp.png"

import Boton from "../../atoms/boton/Boton"

import "./navbar.css"
import { Link } from "react-router-dom"
function Navbar(){
    return(
        <div className="navbarContent w3-left w3-col">
            <nav className="navbar">
            <ul>
                <li className="option">
                    <Boton ClaseDeBoton="botonAmarilloPeq">Iniciar sesión</Boton>
                </li>
                <li className="option">
                <Link to="/">Inicio</Link>
                </li>
                <li className="option">
                <a href="#">Eventos pasados</a>
                </li>
                <li className="option">
                <a href="#">Contáctanos</a>
                </li>
                <li className="option">
                <a href="#">Competiciones</a>
                </li>
            </ul>
            <div className="iconsNav">
            <a href=""><img src={face} /></a>
            <a href=""><img src={wpp} /></a>
            </div>
            </nav>
            
        </div>
    )
}
export default Navbar