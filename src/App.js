import Label from "./components/atoms/label/Label";
import Background from "./components/atoms/background/Background";
import TextInput from "./components/atoms/textInput/TextInput";

function App() {
  return (
    <div>
      Esta es una etiqueta
      <Background>
        <div style={{textAlign: "center", paddingBottom: "72px"}}>
          <Label LabelType="FormTitle" >
            Competencia de Clasificación <br/>
            UMSS
          </Label>
        </div>
        <div style={{textAlign: "center"}}>
          <Label LabelType="FormLabel" >
              Nombre
          </Label>
          <TextInput InputType="date"/>
        </div>
      </Background>
    </div>
  );
}

export default App;
