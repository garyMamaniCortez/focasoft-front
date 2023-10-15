import './Boton.css'

export default function Boton({text, f, buttonType}) {
  return (
    <button onClick={() => f}
      className={`${buttonType == "botonRojoGrand" ? "botonRojoGrand" : ""}
                  ${buttonType == "botonRojoPeq" ? "botonRojoPeq" : ""}
                  ${buttonType == "botonAmarilloGrand" ? "botonAmarilloGrand" : ""}
                  ${buttonType == "botonAmarilloPeq" ? "botonAmarilloPeq" : ""}
                  ${buttonType == "botonAzul" ? "botonAzul" : ""}
      `}>
        {text}
    </button>
  )
}