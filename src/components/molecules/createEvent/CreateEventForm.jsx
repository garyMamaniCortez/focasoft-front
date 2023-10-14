import Label from '../../atoms/label/Label.jsx'
import TextInput from '../../atoms/textInput/TextInput.jsx'
import Background from '../../atoms/background/Background.jsx'

import './CreateEventForm.css'

const CreateEventForm = ({campos}) => {

  return (
    <div>
      {campos.map((item) => (
        <div className='itemContainer'>
          <div className='CreateEventLabel'>
            <Label LabelType={item.LabelType}>{item.etiqueta}</Label>
          </div>
          <div className='CreateEventInput'>
          <TextInput InputType={item.InputType} />
          </div>
        </div>
    ))}
    </div>
  );
}

export default CreateEventForm;