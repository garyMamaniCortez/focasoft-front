import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Formulario from "../../molecules/formulario/Formulario.jsx";
import Boton from "../../atoms/boton/Boton.jsx";
import Background from "../../atoms/background/Background.jsx";
import { useAppContext } from "../../../Context";
import axios from "axios";

const CreateEventSection = (props) => {
  const navigate = useNavigate();
  const id = useAppContext();
  const [imagen, setImagen]= useState(null);
  console.log(props.Accion)
  console.log(props.Evento)
  console.log(props.idEvento)

  //Los valores de los atributos son valores por defecto
  
  const Valores = props.Campos.reduce((resultado, campo) => {
    resultado[campo.Identificador] = campo.Valor;
    return resultado;
  }, {});

  const [formData, setFormData] = useState(
    {
      TituloDelEvento: props.Evento.titulo,
      FechaDelEvento: props.Evento.fecha_ini,
      TipoDelEvento: props.Evento.tipo,
      Descripcion: props.Evento.descripcion,
      AficheDelEvento: null,
      Requisitos: props.Evento.requisitos,
      Premios: props.Evento.premios,
      Patrocinadores: props.Evento.patrocinadores,
      Contactos: props.Evento.contactos
    });
    
  console.log(formData)

  const handleChange = (event) => {
    const { name, value } = event.target;
    if(name!="AficheDelEvento"){
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }else {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = function() {
        const base64String = reader.result.split(',')[1];
        setFormData((prevFormData) => ({ ...prevFormData, [name]: base64String }));
      }
  
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = [];
    const fechaDelEvento = new Date(formData.FechaDelEvento);
    const hoy = new Date();
    const optionalValidationRegex = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚ,]*$/;
    const validationRegex = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚ]+$/;
    const ValidacionContacto = /^(5999999[1-9]|6\d{7}|7\d{7}|7999999[1-9])$/;

    //Validacion del Titulo del evento
    if (!formData.TituloDelEvento.trim()) {
      errors.push("- El campo Titulo del evento no puede estar vacío");
    } else if (!validationRegex.test(formData.TituloDelEvento)) {
      errors.push(
        "- El Titulo del evento solo debe contener caracteres alfanumericos"
      );
    }

    //Variacion para Fecha del evento
    if (!formData.FechaDelEvento.trim()) {
      errors.push("- El campo Fecha del evento no puede estar vacío.");
    } else if (fechaDelEvento <= hoy) {
      errors.push(
        "- La Fecha del evento debe ser una fecha posterior a la de hoy."
      );
    }
    //Validacion para tipos de evento
    if (
      !formData.TipoDelEvento.trim() ||
      formData.TipoDelEvento === "Sin seleccionar"
    ) {
      errors.push("- Debes escoger un tipo del evento.");
    }

    //Validacion para Descripcion
    if (
      !formData.Descripcion.trim() ||
      !validationRegex.test(formData.Descripcion)
    ) {
      errors.push("- El campo descripción no puede estar vacío.");
    }

    //Validacion para Requisitos
    var Requisitos;
    if (!optionalValidationRegex.test(formData.Requisitos)) {
      errors.push("- El campo Requisitos solo debe contener letras y números.");
    } else if (formData.Requisitos.includes(",")) {
      Requisitos = formData.Requisitos.split(",").map(function (item) {
        return item.trim();
      });
    } else {
      Requisitos = [formData.Requisitos];
    }

    //Validacion para Premios
    var Premios;
    if (!optionalValidationRegex.test(formData.Premios)) {
      errors.push("- El campo Premios solo debe contener letras y números.");
    } else if (formData.Premios.includes(",")) {
      Premios = formData.Premios.split(",").map(function (item) {
        return item.trim();
      });
    } else {
      Premios = [formData.Premios];
    }

    // Validacion para Patrocinadores
    var Patrocinadores;
    if (!optionalValidationRegex.test(formData.Patrocinadores)) {
      errors.push(
        "- El campo Patrocinadores solo debe contener letras y números."
      );
    } else if (formData.Patrocinadores.includes(",")) {
      Patrocinadores = formData.Patrocinadores.split(",").map(function (item) {
        return item.trim();
      });
    } else {
      Patrocinadores = [formData.Patrocinadores];
    }

    // Validacion para contactos
    var Contactos = formData.Contactos;
    if (Contactos.trim() === "") {
      Contactos = [];
    } else {
      Contactos = Contactos.split(",").map(function (item) {
        return item.trim();
      });
    }
    for (var i = 0; i < Contactos.length; i++) {
      if (!ValidacionContacto.test(Contactos[i])) {
        errors.push("- No todos los Contactos son válidos.");
        break;
      }
    }

    //Resultado de validacion
    if (errors.length > 0) {
      alert("Errores:\n\n" + errors.join("\n"));
    } else {
      if(props.Accion=="crear"){
        axios.post("http://localhost:8000/api/evento", {
          titulo: formData.TituloDelEvento,
          fecha_ini: formData.FechaDelEvento,
          fecha_fin: null,
          tipo: formData.TipoDelEvento,
          descripcion: formData.Descripcion,
          afiche: formData.AficheDelEvento,
          id_formulario: id.datos,
          requisitos: formData.Requisitos,
          premios: formData.Premios,
          patrocinadores: formData.Patrocinadores,
          contactos: formData.Contactos,
        })
        .then(function (response) {
          console.log(response);
          navigate("/");
        })
        .catch(function (error) {
          console.log(error.response.data.error);
          alert(error.response.data.error);
        });
      }else{
          axios.put(`http://localhost:8000/api/evento/${props.idEvento}`, {
          titulo: formData.TituloDelEvento,
          fecha_ini: formData.FechaDelEvento,
          fecha_fin: null,
          tipo: formData.TipoDelEvento,
          descripcion: formData.Descripcion,
          afiche: formData.AficheDelEvento,
          id_formulario: id.datos,
          requisitos: formData.Requisitos,
          premios: formData.Premios,
          patrocinadores: formData.Patrocinadores,
          contactos: formData.Contactos,
          })
          .then(function (response) {
            console.log(response);
            navigate("/");
          })
          .catch(function (error) {
            console.log(error.response.data.error);
            alert(error.response.data.error);
          });

      }
    }
  };

  return (
    <Background>
      <form onSubmit={handleSubmit}>
        <Formulario
          CamposDeEntrada={props.Campos}
          handleChange={handleChange}
          Desactivado={false}
          FormData={formData}
        />
        <div className="w3-row w3-center">
          <div className="createEventButton w3-col l6">
            {/*<Link to="/CrearEvento/AgregarFormulario">
              <Boton ClaseDeBoton="botonAmarilloGrand">
                Formulario de registro
              </Boton>
  </Link>*/}
          </div>
          <div className="w3-col l6">
            <Boton ClaseDeBoton="botonRojoGrand" TipoDeBoton="submit">
              {props.Accion=="crear" ?  "Crear evento" : "Editar evento"}
            </Boton>
          </div>
        </div>
      </form>
    </Background>
  );
};

export default CreateEventSection;
