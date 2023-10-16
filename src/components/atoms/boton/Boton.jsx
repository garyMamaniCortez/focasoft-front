import './Boton.css'

export default function Boton({children, f, TipoDeBoton, ClaseDeBoton, form}) {
  return (
    <button onClick={f}
      className={`${ClaseDeBoton === "botonRojoGrand" ? "botonRojoGrand" : ""}
                  ${ClaseDeBoton === "botonRojoPeq" ? "botonRojoPeq" : ""}
                  ${ClaseDeBoton === "botonAmarilloGrand" ? "botonAmarilloGrand" : ""}
                  ${ClaseDeBoton === "botonAmarilloPeq" ? "botonAmarilloPeq" : ""}
                  ${ClaseDeBoton === "botonAzul" ? "botonAzul" : ""}
      `}
      form={form}
      TipoDeBoton={TipoDeBoton === "submit" ? "submit" : "button"}
      >
        {children}
    </button>
  )
}