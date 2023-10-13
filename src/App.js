import Label from "./components/atoms/label/Label";
import "./components/atoms/label/Label.css"
import Boton from "./components/atoms/boton/Boton.jsx"
function App() {
  return (
    <div>
      Esta es una etiqueta
      <br/><Label LabelType="ListBody" >
        Gato
      </Label><br/>
      <Boton text='Holi' buttonType='crudButton'/>
    </div>
  );
}

export default App;
