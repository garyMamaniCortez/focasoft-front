import CreateEventSection from "../../organisms/createEventSection/CreateEventSection";
import "./CreateEvent.css";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axiosInterceptorInstance from "../../../axios/interceptor";
import { ENDPOINTS } from "../../../Constants/endpoinst";
import { useEffect } from "react";
import { useState } from "react";
import Boton from "../../atoms/boton/Boton.jsx";
import Formulario from "../../molecules/formulario/Formulario";
import Background from "../../atoms/background/Background.jsx";

import swal from "sweetalert";

const EditEvent = () => {
  const { id } = useParams();
  const [datosDelEvento, setDatosDelEvento] = useState({});
  const [eventoCargado, setEventoCargado] = useState(false);
  const [formData, setFormData] = useState();
  const [hayform,setHay] = useState(false)
  const [imageUrl, setImagenUrl] = useState(null);
  const [aficheN, setAficheN] = useState(null)

  const navigate = useNavigate();

  useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await axiosInterceptorInstance.get(
          ENDPOINTS.obtenerEvento+id
        );
        const data = response.data;
        setDatosDelEvento(data);
        setEventoCargado(true); // Marcar el evento como cargado
        const evento = {
          TituloDelEvento: data.titulo,
          FechaDelEvento: data.fecha_ini,
          TipoDelEvento: data.tipo,
          AficheDelEvento: obtenerDatosImagen(data.afiche),
          Descripcion: data.descripcion,
          Requisitos: data.requisitos,
          Premios: data.premios,
          Patrocinadores: data.patrocinadores,
          Contactos: data.contactos,
        };
        setFormData(evento)
        setHay(true);
        setImagenUrl(data.afiche);
        console.log(imageUrl)
        obtenerDatosImagen(data.afiche);
      
      } catch (error) {
        console.error("Error al obtener el evento:", error);
      }
      console.log(formData)
    };

    const obtenerDatosImagen = async (url) => {
      if(imageUrl!=null){
        try {
          const response = await axiosInterceptorInstance.get("http://"+url, { responseType: 'arraybuffer' });
      
          // Convertir el ArrayBuffer a un array de bytes (Uint8Array)
          const uint8Array = new Uint8Array(response.data);
      
          // Convertir el Uint8Array a una cadena base64
          const base64String = btoa(String.fromCharCode.apply(null, uint8Array));
          setFormData((prevFormData) => ({
            ...prevFormData,
            AficheDelEvento: base64String,
          }));
          console.log(formData)
          return(base64String)
      
          // Hacer algo con los datos en base64, por ejemplo, imprimir los primeros 100 caracteres
          console.log('Datos de la imagen en base64:', base64String.slice(0, 100));
        } catch (error) {
          console.error('Error al obtener los datos de la imagen:', error.message);
        }
      }else{
        return null
      }
    };
    
    // Llamar a la función para obtener los datos de la imagen
    



    getEvent();
    


  }, [id]);


  const handleChange = (event) => {
    const { name, value } = event.target;   
    if (name != "AficheDelEvento") {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }else {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function () {
        const base64String = reader.result.split(",")[1];
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: base64String,
        }));
      };

      reader.readAsDataURL(file);
    }
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = [];
    const fechaDelEvento = new Date(formData.FechaDelEvento);
    const hoy = new Date();
    const validarAlfanumericos = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ]+$/;
    const validarDescripcion = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ,]+$/;
    const validarListas = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ,]+$/;
    const ValidacionContacto = /^(59999999|7\d{7}|[8-9]\d{7})$/;
    const ValidacionCorreo = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    //Variacion para Fecha del evento
    if (
      !formData.FechaDelEvento.trim() ||
      typeof formData.FechaDelEvento === "undefined"
    ) {
      errors.push("- El campo Fecha del evento no puede estar vacío.");
    } else {
      if (fechaDelEvento <= hoy) {
        errors.push(
          "- La Fecha del evento debe ser una fecha posterior a la de hoy."
        );
      }
    }

    // Validacion para contactos
    var Contactos = formData.Contactos;
    if (typeof Contactos === "undefined" || Contactos === null) {
      Contactos = [];
    } else if (typeof Contactos === "string") {
      Contactos = Contactos.trim()
        .split(",")
        .map(function (item) {
          return item.trim();
        });
    }
    if (Contactos.length != " ") {
    } else {
      for (var i = 0; i < Contactos.length; i++) {
        var elemento = Contactos[i];
        if (
          !ValidacionContacto.test(elemento) &&
          !ValidacionCorreo.test(elemento)
        ) {
          errors.push("- No todos los contactos son validos");
        }
      }
    }
    if (errors.length > 0) {
      swal({ icon: "error", text: "Errores:\n\n" + errors.join("\n") });
    } else {
      console.log("este es el formdata final")
      console.log(formData)

      
        axiosInterceptorInstance.put(ENDPOINTS.editarEvento + id, {
          id: id,
            titulo: formData.TituloDelEvento,
            fecha_ini: formData.FechaDelEvento,
            fecha_fin: null,
            tipo: formData.TipoDelEvento,
            equipo: datosDelEvento.equipo,
            descripcion: formData.Descripcion,
            afiche: formData.AficheDelEvento,
            id_formulario: datosDelEvento.id_formulario,            
            patrocinadores: datosDelEvento.patrocinadores,
            premios:datosDelEvento.premios,
            requisitos:datosDelEvento.requisitos,
            contactos: formData.Contactos,   
            ganadores: datosDelEvento.ganadores                  
          })
          .then(function (response) {
            console.log(response);
            navigate("/admin");
          })
          .catch(function (error) {
            console.log(error);
            swal({ icon: "error", text: error.response.data.error });
          });
      
    }
  };

  if (!eventoCargado) {
    // Si el evento no se ha cargado todavía, puedes mostrar un spinner o un mensaje de carga
    return <div>Cargando evento...</div>;
  }

  const Campos = [
    
    {
      divClase: "itemContainer",
      Etiqueta: "Fecha del evento",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "date",
      Identificador: "FechaDelEvento",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos: "La fecha posterior a la de hoy",
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Afiche del evento",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "file",
      Identificador: "AficheDelEvento",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos: "El Afiche debe ser un archivo en fomato jpeg",
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Contactos",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Contactos",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos:
        "Solo debe contener caracteres alfanumericos y deben separarse con una coma",
    }
  ];

  return (
    
    <div className="CreateEventContent vistaContent w3-right">
      {hayform ? (
        <div className="contenidoEditar">
      <h1 className="TituloDeSeccion">Editar evento</h1>
      <h2 className="TituloEvento">{formData.TituloDelEvento}</h2>
      <Background  Tipo="FondoEvento">

      <div className="CreateEventSection">              
      <form onSubmit={handleSubmit}>
        <Formulario
          CamposDeEntrada={Campos}
          handleChange={handleChange}
          Desactivado={false}
          FormData={formData}          
        />
        <div className="w3-row w3-center">
          <Boton ClaseDeBoton="botonRojoGrand" TipoDeBoton="submit">
            Editar evento
          </Boton>
        </div>
      </form>
      </div>
      </Background>
      </div>
  ): (<p>Loading...</p>
  )}
    </div>

    
  );
};

export default EditEvent;
