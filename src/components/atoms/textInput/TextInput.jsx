import'./TextInput.css'

const TextInput = ({InputType}) => {

    return (
        <div>
        <input 
        className={`${InputType === "text" ? "Text" : 
        InputType == "date" ? "Text" :
        InputType == "description" ? "Description" :
        InputType == "file" ? "Text" :
        InputType == "select" ? "Text" : ""}
        `}

        type={`${InputType === "text" ? "text" : 
        InputType == "description" ? "text" : 
        InputType == "date" ? "date" : 
        InputType == "file" ? "file" : ""}`}
        
        disabled={InputType == "select" ? true : false}
        hidden={InputType == "select" ? true : false}/>

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
