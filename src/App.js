import Label from "./components/atoms/label/Label";
import "./components/atoms/label/Label.css"

function App() {
  return (
    <div>
      Esta es una etiqueta
      <br/><Label LabelType="ListBody" >
        Gato
      </Label><br/>
    </div>
  );
}

export default App;
