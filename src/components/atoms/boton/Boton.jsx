import './Boton.css'

export default function Boton({text, f, buttonType}) {
  return (
    <button onClick={() => f}
      className={`${buttonType == "crudButton" ? "crudButton" : ""}
                  ${buttonType == "formButton" ? "formButton" : ""}
                  ${buttonType == "submitButton" ? "submitButton" : ""}
      `}>
        {text}
    </button>
  )
}