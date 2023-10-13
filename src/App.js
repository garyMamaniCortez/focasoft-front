import Background from "./components/atoms/background/Background";
import Boton from "./components/atoms/boton/Boton";
import Label from "./components/atoms/label/Label";
import "./components/atoms/label/Label.css"

function App() {
  return (
    <div>
      <Background>
        <p>datos</p>
        <br/><Label LabelType="ListBody" >
        Gato
      </Label><br/>
      
        <Boton buttonType='formButton' text='holi'/>
      </Background>
    </div>
  );
}

export default App;
