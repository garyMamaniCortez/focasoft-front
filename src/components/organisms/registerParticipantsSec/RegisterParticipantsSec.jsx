import Background from "../../atoms/background/Background.jsx";
import Boton from "../../atoms/boton/Boton.jsx";
import Label from "../../atoms/label/Label.jsx";
import Formulario from "../../molecules/formulario/Formulario.jsx";

const RegisterParticipantsSec = ({CamposDeEntrada}) => {
  const Evento = "Evento de Programación";
  return (
    <Background>
      <Label TipoDeEtiqueta="FormTitle">{Evento}</Label>
      <Formulario CamposDeEntrada= {CamposDeEntrada}/>
      <div className="w3-row w3-center">
          <div className="createEventButton w3-col l12">
          <Boton text="Registrarse" buttonType="botonRojoGrand"></Boton>
          </div>
        </div>
    </Background>
  );
}

export default RegisterParticipantsSec;