import Background from "../../atoms/background/Background";
import Label from "../../atoms/label/Label";

const Participantes = () => {
  return (
    <div className="CreateEventContent vistaContent w3-right">
      <h1 className="TituloDeSeccion">Lista de participantes</h1>
      <h2 className="Subtitulo">Tipo del evento</h2>
      <div className="CreateEventSection">
        <Background Tipo="FondoParticipantes">
          <Label TipoDeEtiqueta="FormularioTitulo2">Registrados</Label>
        </Background>
      </div>
    </div>
  );
};

export default Participantes;
