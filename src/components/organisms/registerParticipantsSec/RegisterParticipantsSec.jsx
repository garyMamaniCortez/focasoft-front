import Background from "../../atoms/background/Background.jsx";
import RegisterParticipants from "../../molecules/registerParticipants/RegisterParticipants.jsx" 
import Boton from "../../atoms/boton/Boton.jsx";
import Label from "../../atoms/label/Label.jsx";

const RegisterParticipantsSec = ({campos}) => {
  const Evento = "Evento de Programación";
  return (
    <Background>
      <Label LabelType="FormTitle">{Evento}</Label>
      <RegisterParticipants campos= {campos}/>
      <div className="w3-row w3-center">
          <div className="createEventButton w3-col l12">
          <Boton text="Registrarse" buttonType="crudButton"></Boton>
          </div>
        </div>
    </Background>
  );
}

export default RegisterParticipantsSec;