import Background from "../../atoms/background/Background";
import Label from "../../atoms/label/Label";
import { useParams } from "react-router-dom";
import axios from "axios";
import Participante from "../../molecules/Participante/Participante";
import { useEffect } from "react";
import { useState } from "react";
import Boton from "../../atoms/boton/Boton";
import InputBuscar from "../../atoms/inputBuscar/InputBuscar";
import './Participante.css';
import 'w3-css/w3.css';

const Participantes = () => {
  const {EventoTitulo, idForm, id } = useParams();
  const [datosDelEvento, setDatosDelEvento] = useState({});
  const [eventoCargado, setEventoCargado] = useState(false);
  const [preguntas, setPreguntas] = useState([]);
  const [participantes, setParticipantes] = useState([]);

  useEffect(() => {
    const getCampos = async () => {
      try {
        if (idForm) {
          console.log(idForm);
          const response = await axios.get(
            `http://localhost:8000/api/formularios/registro/${idForm}`
          );
          setPreguntas(response.data);
          console.log(response.data);
          setEventoCargado(true);
        }
      } catch (error) {
        console.error("Error al obtener las preguntas del evento:", error);
      }
    };
    const getParticipantes = async () => {
      try {
        if (id) {
          axios
              .post("http://localhost:8000/api/formularios/participantes", {
                "id_evento": id,
              })
              .then(function (response) {
                setParticipantes(response.data)
                console.log(response.data);
              });
      }} catch (error) {
        console.log("Error al obtener las preguntas del evento:", error);
      }
    };

    getCampos();
    getParticipantes();
  }, [idForm]);

  const imprimirTabla = () => {
    window.print();
  }; 


  const ListaParticipantes = [
    { Nombres: "Luis", Apellidos: "Rosales", Correo: "Mi correo" },
    { Nombres: "Nathaly", Apellidos: "Garcia", Correo: "Mi correo" },
    { Nombres: "Adrian", Apellidos: "Camara", Correo: "Mi correo" },
  ];



  return (
    <div className="CreateEventContent vistaContent w3-right participanteContent">
      <h1 className="TituloDeSeccion">Lista de participantes</h1>
      <h2 className="Subtitulo">{EventoTitulo}</h2>
      <div className="CreateEventSection">
        <Background Tipo="FondoParticipantes">
          <Label TipoDeEtiqueta="FormularioTitulo2">Registrados</Label>
          <div className="w3-row Botones">
              <div className="w3-col m4 l3">
                <Boton ClaseDeBoton= 'botonAmarilloGrand' TipoDeBoton= 'button' f={imprimirTabla}>Imprimir registro</Boton>
              </div>
              <div className="inputBuscar w3-col m4 l3 w3-right">
                <InputBuscar text="Buscar registrado"></InputBuscar>
              </div>
          </div>
          <div className="CentrarContenido">
          <table className="mi-tabla">
                  <tr className="CamposEspacio fila-amarilla" >
                    {
                      preguntas.map((pregunta) => <td>{pregunta.texto_pregunta}</td>)
                      
                      }
                                          <td>ID</td>

                  </tr>
                  <tr class="espacio"></tr>

              {
                
                participantes.map(
                  (elemento, index)=>
                
                <tr className="Datos" key={index}>
                {Object.values(elemento).map((valor, index) => (
        <td key={index}>{valor}</td>
      ))}
                </tr>)
              
              }
          </table>
          </div>
        </Background>
      </div>
    </div>
  );
};

export default Participantes;
