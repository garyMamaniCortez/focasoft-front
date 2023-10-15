import'./TextInput.css'

const TextInput = ({InputType, Id}) => {

    return (
        <div>
        <input 
        className={`${InputType === "text" ? "Text" : 
        InputType == "date" ? "Text" :
        InputType == "description" ? "Description" :
        InputType == "file" ? "Text" :
        InputType == "select" ? "Text" :
        InputType == "email" ? "Text" : ""}
        `}

        type={`${InputType === "text" ? "text" : 
        InputType == "description" ? "text" : 
        InputType == "date" ? "date" : 
        InputType == "file" ? "file" : 
        InputType == "email" ? "email" : ""}`}
        
        id={Id}

        disabled={InputType == "select" ? true : false}
        hidden={InputType == "select" ? true : false}/>
{/* Esto no funciona */}
        <select name="" id=""
        className="Select"
        disabled={InputType != "select" ? true : false}
        hidden={InputType != "select" ? true : false}>
            <option value="volvo">Competencia</option>
            <option value="saab">Curso</option>
        </select>

        </div>
    );
}

export default TextInput
