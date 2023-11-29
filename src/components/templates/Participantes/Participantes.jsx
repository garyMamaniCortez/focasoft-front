import Background from "../../atoms/background/Background";
import Label from "../../atoms/label/Label";
import Participante from "../../molecules/Participante/Participante";

const Participantes = () => {
  const ListaParticipantes = [
    { Nombres: "Luis", Apellidos: "Rosales", Correo: "Mi correo" },
    { Nombres: "Nathaly", Apellidos: "Garcia", Correo: "Mi correo" },
    { Nombres: "Adrian", Apellidos: "Camara", Correo: "Mi correo" },
  ];

  return (
    <div className="CreateEventContent vistaContent w3-right">
      <h1 className="TituloDeSeccion">Lista de participantes</h1>
      <h2 className="Subtitulo">Tipo del evento</h2>
      <div className="CreateEventSection">
        <Background Tipo="FondoParticipantes">
          <Label TipoDeEtiqueta="FormularioTitulo2">Registrados</Label>
          <div className="CentrarContenido">
            <Participante
              Tipo="FondoParticipante2"
              Nombres="NOmbre de participante"
              Apellidos="Apelldios de participante"
              Correo="Correo de participante"
            />
            {ListaParticipantes.map((item) => (
              <Participante
                Tipo="FondoParticipante1"
                Nombres={item.Nombres}
                Apellidos={item.Apellidos}
                Correo={item.Correo}
              />
            ))}
          </div>
        </Background>
      </div>
    </div>
  );
};

export default Participantes;
