import Background from "../../atoms/background/Background";
import Label from "../../atoms/label/Label";
import TextInput from "../../atoms/textInput/TextInput";

import './CreateFormRegister.css'

const CreateFormRegister = ({campos}) => {

    return (
        <div>
            <Background>
                {campos.map((item) => (
                    <div className='itemContainer'>
                    <Label LabelType={item.LabelType}>{item.etiqueta}</Label>
                    <TextInput InputType={item.InputType} />
                    </div>
                ))}
            </Background>
        </div>
    );
}

export default CreateFormRegister;