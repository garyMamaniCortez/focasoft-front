import'./TextInput.css'

const TextInput = ({TipoDeEntrada, Identificador, ManejarCambio, OpcionesDelDesplegable, Desactivado}) => {
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
        TipoDeEntrada === "email" ? "EntradaDeTexto" :
        TipoDeEntrada === "password" ? "Contrasena" : 
        TipoDeEntrada === "User" ? "User" : ""}
        `}

        type={`${TipoDeEntrada === "text" ? "text" : 
        TipoDeEntrada === "description" ? "text" : 
        TipoDeEntrada === "date" ? "date" : 
        TipoDeEntrada === "file" ? "file" : 
        TipoDeEntrada === "email" ? "email" : 
        TipoDeEntrada === "password" ? "password" :
        TipoDeEntrada === "User" ? "text" : ""}`}

        placeholder={`${TipoDeEntrada === "password" ? "contraseña" : 
        TipoDeEntrada === "User" ? "usuario" : ""}`}

        accept={`${TipoDeEntrada === "file" ? ".jpeg" : ""}`}
        onChange={ManejarCambio}

        disabled={Desactivado? true : TipoDeEntrada === "select" ? true : false}
        hidden={TipoDeEntrada === "select" ? true : false}/>
{/* Esto no funciona */}
        <select
        id={TipoDeEntrada === "select" ? Identificador : ""}
        name={TipoDeEntrada === "select" ? Identificador : ""}
        className="EntradaDeTexto"
        disabled={Desactivado? true : TipoDeEntrada !== "select" ? true : false}
        
        onChange={ManejarCambio}
        
        hidden={TipoDeEntrada !== "select" ? true : false}
        
        >
            {OpcionesDelDesplegable.map((item) => (
        
                <option value={item.Valor}>{item.Etiqueta}</option>
            ))}
        </select>

        </div>
    );
}

export default TextInput
