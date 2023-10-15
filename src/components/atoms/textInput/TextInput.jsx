import'./TextInput.css'

const TextInput = ({TipoDeEntrada, Id}) => {

    return (
        <div>
        <input 
        id={TipoDeEntrada != "select" ? Id : ""}
        className={`${TipoDeEntrada === "text" ? "EntradaDeTexto" : 
        TipoDeEntrada == "date" ? "EntradaDeTexto" :
        TipoDeEntrada == "description" ? "EntradaDeTexto" :
        TipoDeEntrada == "file" ? "EntradaDeTexto" :
        TipoDeEntrada == "select" ? "EntradaDeTexto" :
        TipoDeEntrada == "email" ? "EntradaDeTexto" : ""}
        `}

        type={`${TipoDeEntrada === "text" ? "text" : 
        TipoDeEntrada == "description" ? "text" : 
        TipoDeEntrada == "date" ? "date" : 
        TipoDeEntrada == "file" ? "file" : 
        TipoDeEntrada == "email" ? "email" : ""}`}

        disabled={TipoDeEntrada == "select" ? true : false}
        hidden={TipoDeEntrada == "select" ? true : false}/>
{/* Esto no funciona */}
        <select
        id={TipoDeEntrada === "select" ? Id : ""}
        className="EntradaDeTexto"
        disabled={TipoDeEntrada != "select" ? true : false}
        
        hidden={TipoDeEntrada != "select" ? true : false}>
            <option value="volvo">Competencia</option>
            <option value="saab">Curso</option>
        </select>

        </div>
    );
}

export default TextInput
