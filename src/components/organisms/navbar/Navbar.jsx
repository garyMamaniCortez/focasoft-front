import React from "react"
import "./navbar.css"
import face from "./facebook.png"
import wpp from "./whatsapp.png"
function Navbar(){
    return(
        <div className="navbarContent w3-left w3-col">
            <nav className="navbar">
            <ul>
                <li className="option">
                    <a href="#">Inicio</a>
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