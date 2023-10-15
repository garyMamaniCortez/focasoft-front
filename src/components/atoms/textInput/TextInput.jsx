import'./TextInput.css'

const TextInput = ({TipoDeEntrada, Identificador, ManejarCambio}) => {
    return (
        <div>
        <input 
        id={TipoDeEntrada !== "select" ? Identificador : ""}
        name={TipoDeEntrada !== "select" ? Identificador : ""}  
        
        className={`${TipoDeEntrada === "text" ? "EntradaDeTexto" : 
        TipoDeEntrada === "date" ? "EntradaDeTexto" :
        TipoDeEntrada === "description" ? "EntradaDeTexto" :
        TipoDeEntrada === "file" ? "EntradaDeTexto" :
        TipoDeEntrada === "select" ? "EntradaDeTexto" :
        TipoDeEntrada === "email" ? "EntradaDeTexto" : ""}
        `}

        type={`${TipoDeEntrada === "text" ? "text" : 
        TipoDeEntrada === "description" ? "text" : 
        TipoDeEntrada === "date" ? "date" : 
        TipoDeEntrada === "file" ? "file" : 
        TipoDeEntrada === "email" ? "email" : ""}`}

        onChange={ManejarCambio}

        disabled={TipoDeEntrada === "select" ? true : false}
        hidden={TipoDeEntrada === "select" ? true : false}/>
{/* Esto no funciona */}
        <select
        id={TipoDeEntrada === "select" ? Identificador : ""}
        name={TipoDeEntrada === "select" ? Identificador : ""}
        className="EntradaDeTexto"
        disabled={TipoDeEntrada !== "select" ? true : false}
        
        onChange={ManejarCambio}
        
        hidden={TipoDeEntrada !== "select" ? true : false}>
            <option value="Competencia">Competencia</option>
            <option value="Curso">Curso</option>

        </select>

        </div>
    );
}

export default TextInput
