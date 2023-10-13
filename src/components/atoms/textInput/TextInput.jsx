import'./TextInput.css'

const TextInput = ({InputType, Select}) => {

    console.log(Select);
    return (
        <div>
        <input 
        className={`${InputType === "text" ? "Text" : 
        InputType == "date" ? "Date" :
        InputType == "description" ? "Description" : ""}
        `}

        type={`${InputType === "text" ? "text" : 
        InputType == "description" ? "text" : 
        InputType == "date" ? "2018-07-22" : ""}`}
        
        placeholder={`${InputType === "text" ? "Texto" : 
        InputType == "email" ? "correo@gmail.com" :
        InputType == "description" ? "Descripcion" : 
        InputType == "date" ? "2018-07-22" : ""}`}
        
        disabled={Select}
        />
        </div>
    );
}

export default TextInput
