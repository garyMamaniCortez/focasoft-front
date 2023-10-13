import'./TextInput.css'

const TextInput = ({InputType}) => {
    return (
        <input 
        className={`${InputType === "text" ? "Text" : 
        InputType == "date" ? "Date" : ""}`}

        type={`${InputType}`}
        
        placeholder={`${InputType === "text" ? "Texto" : 
        InputType == "email" ? "correo@gmail.com" : 
        InputType == "date" ? "2018-07-22" : ""}`}/>
    );
}

export default TextInput
