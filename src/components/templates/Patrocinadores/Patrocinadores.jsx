import React from "react";
import Background from "../../atoms/background/Background";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInterceptorInstance from "../../../axios/interceptor";
import { ENDPOINTS } from "../../../Constants/endpoinst";
import Boton from "../../atoms/boton/Boton";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./patrocinadores.css"
import axios from "axios";

import 'w3-css/w3.css';

const Patrocinadores = () =>{ 
  const { id } = useParams();
  const navigate = useNavigate();
  const [patros, setPatros] = useState([]);
  const [patrosActive, setPatrosA] = useState(false);
  const [patrocinadores, setPatrocinadores] = useState([]);
  const [datosDelEvento, setDatosDelEvento] = useState({});
  const [eventoCargado, setEventoCargado] = useState(false);
  const [patrocinadoresEvento,setPatrocinadoresEvento] =useState([])
  const [image,setImage]=useState(null)

  useEffect(() => {
    const getPatro = async () => {
      try {
        const response = await axiosInterceptorInstance.get(
            ENDPOINTS.obtenerPatrocinadores
        );
        setPatros(response.data);
        setPatrosA(true);
      } catch (error) {
        console.error("Error al obtener patrocinadores:", error);
      }
    };
    getPatro();
  }, []);

 

  useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await axiosInterceptorInstance.get(
          ENDPOINTS.obtenerEvento+id
        );
        setDatosDelEvento(response.data);
        setEventoCargado(true); // Marcar el evento como cargado
        let aficheDelEvento = null;

        if (response.data.afiche != null) {
          aficheDelEvento = await obtenerDatosImagen(response.data.afiche);
          setImage(aficheDelEvento)
        }
      } catch (error) {
        console.error("Error al obtener el evento:", error);
      }
    };

    const obtenerDatosImagen = async (url) => {
      try {
        const response = await axios.get("http://"+url, { responseType: 'arraybuffer' });
    
        // Convertir el ArrayBuffer a un array de bytes (Uint8Array)
        const uint8Array = new Uint8Array(response.data);
    
        // Convertir el Uint8Array a una cadena base64
        const base64String = btoa(String.fromCharCode.apply(null, uint8Array));
        return(base64String)
    
        // Hacer algo con los datos en base64, por ejemplo, imprimir los primeros 100 caracteres
        console.log('Datos de la imagen en base64:', base64String.slice(0, 100));
      } catch (error) {
        console.error('Error al obtener los datos de la imagen:', error.message);
      }
  };
    getEvent();
  }, [id]);

  useEffect(() => {
    if (eventoCargado) {
      setPatrocinadoresEvento(datosDelEvento.patrocinadores === null ? []: datosDelEvento.patrocinadores)
      console.log(patrocinadoresEvento)
    }
  }, [eventoCargado, datosDelEvento]);

  useEffect(() => {
    if (patrosActive) {
      const patrocinadoresIniciales = patros.map((patrocina) => ({
        id: patrocina.id,
        nombre: patrocina.nombre,
        seleccionado: patrocinadoresEvento.includes(patrocina.nombre),
      }));
      setPatrocinadores(patrocinadoresIniciales);
    }
  }, [patrosActive, patros, patrocinadoresEvento]);

        const handleCheckboxChange = (id) => {
          setPatrocinadores((prevPatrocinadores) =>
            prevPatrocinadores.map((patrocinador) =>
              patrocinador.id === id
                ? { ...patrocinador, seleccionado: !patrocinador.seleccionado }
                : patrocinador
            )
          );
          console.log(patrocinadores);

        };
        const guardarPatro = () => {
          const patrocinadoresSeleccionados = patrocinadores.filter((p) => p.seleccionado);
          const nombresPatrocinadoresSeleccionados = patrocinadoresSeleccionados.map((p) => p.nombre);
          console.log(nombresPatrocinadoresSeleccionados);
          axiosInterceptorInstance
          .put(ENDPOINTS.obtenerEvento+id, {
            "titulo": datosDelEvento.titulo,
            "fecha_ini": datosDelEvento.fecha_ini,
            "tipo": datosDelEvento.tipo,
            "afiche":image,
            "descripcion": datosDelEvento.descripcion,
            "id_formulario": datosDelEvento.id_formulario,
            "fecha_fin": datosDelEvento.fecha_fin,
            "requisitos": datosDelEvento.requisitos,
            "premios": datosDelEvento.premios,
            "contactos": datosDelEvento.contactos,
            "equipo": datosDelEvento.equipo,
            "ganadores": datosDelEvento.ganadores,
            "patrocinadores": nombresPatrocinadoresSeleccionados
          })
          .then(function (response) {
            console.log(response);
            navigate("/admin");
          })
          .catch(function (error) {
            console.log(error.response.data.error);
            swal({ icon: "error", text: error.response.data.error });
          });
        }
      
    return(
        <div className="CreateEventContent vistaContent w3-right patrocinadoresContent">
          <h2>
            {datosDelEvento.titulo}
          </h2>
          <div className="misPatrocinadores">

          {patrosActive ? (
            
            <Background Tipo="Predeterminado FondoPatrocinadores">
            <h2>Lista de Patrocinadores</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Seleccionar</th>
          </tr>
        </thead>
        <tbody>
          {patrocinadores.map((patrocinador) => (
            <tr key={patrocinador.id}>
              <td>{patrocinador.nombre}</td>
              <td>
                <input
                  className="miCheckbox"
                  type="checkbox"
                  checked={patrocinador.seleccionado}
                  onChange={() => handleCheckboxChange(patrocinador.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Boton ClaseDeBoton="botonRojoGrand" TipoDeBoton="button" f ={guardarPatro}>Guardar patrocinadores</Boton>
            </Background>
          ) : (<p>cargando...</p>)
}
          </div>
        </div>
    )
}

export default Patrocinadores;