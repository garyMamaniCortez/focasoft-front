import Label from '../../atoms/label/Label.jsx'
import TextInput from '../../atoms/textInput/TextInput.jsx'
import Background from '../../atoms/background/Background.jsx'

import './CreateEventForm.css'

const CreateEventForm = ({campos}) => {

  return (
    <div>
      {campos.map((item) => (
        <div className='itemContainer'>
        <Label LabelType={item.LabelType}>{item.etiqueta}</Label>
        <TextInput InputType={item.InputType} />
        </div>
    ))}
    </div>
  );
}

export default CreateEventForm;