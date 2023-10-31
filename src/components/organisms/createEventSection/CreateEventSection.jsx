import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import swal from "sweetalert";

import Formulario from "../../molecules/formulario/Formulario.jsx";
import Boton from "../../atoms/boton/Boton.jsx";
import Background from "../../atoms/background/Background.jsx";
import { useAppContext } from "../../../Context";
import axios from "axios";

const CreateEventSection = (props) => {
  const navigate = useNavigate();
  const id = useAppContext();
  const [imagen, setImagen] = useState(null);

  const [formData, setFormData] = useState(props.Evento);

  console.log(formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name != "AficheDelEvento") {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    } else {
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
    if (
      !formData.TituloDelEvento.trim() ||
      typeof formData.TituloDelEvento === "undefined"
    ) {
      errors.push("- El campo Titulo del evento no puede estar vacío");
    } else if (!validationRegex.test(formData.TituloDelEvento)) {
      errors.push(
        "- El Titulo del evento solo debe contener caracteres alfanumericos"
      );
    }

    //Variacion para Fecha del evento
    if (
      !formData.FechaDelEvento.trim() ||
      typeof formData.FechaDelEvento === "undefined"
    ) {
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
      typeof formData.Descripcion === "undefined"
    ) {
      errors.push("- El campo descripción no puede estar vacío.");
    }

    //Validacion para Requisitos
    var Requisitos;
    if (
      !optionalValidationRegex.test(formData.Requisitos) ||
      typeof formData.Requisitos === "undefined"
    ) {
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
    if (
      !optionalValidationRegex.test(formData.Premios) ||
      typeof formData.Premios === "undefined"
    ) {
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
    if (
      !optionalValidationRegex.test(formData.Patrocinadores) ||
      typeof formData.Patrocinadores === "undefined"
    ) {
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
    if (typeof Contactos === "undefined" || Contactos === null) {
      Contactos = [];
    } else if (typeof Contactos === "string") {
      Contactos = Contactos.trim()
        .split(",")
        .map(function (item) {
          return item.trim();
        });
    }

    if (Contactos.length != 0) {
    } else {
      // Validar cada elemento en el arreglo
      for (var i = 0; i < Contactos.length; i++) {
        var elemento = Contactos[i];
        if (
          !/^\d{8}$/.test(elemento) ||
          !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(elemento)
        ) {
          // Si el elemento no es un número de 8 dígitos ni una dirección de correo electrónico válida, puedes manejar el error o tomar una acción específica aquí.
          errors.push("- No todos los contactos son validos");
        }
      }
    }
    //Resultado de validacion
    if (errors.length > 0) {
      swal({ icon: "error", text: "Errores:\n\n" + errors.join("\n") });
    } else {
      if (props.Accion == "crear") {
        axios
          .post("http://localhost:8000/api/evento", {
            titulo: formData.TituloDelEvento,
            fecha_ini: formData.FechaDelEvento,
            fecha_fin: null,
            tipo: formData.TipoDelEvento,
            descripcion: formData.Descripcion,
            afiche: formData.AficheDelEvento,
            id_formulario: props.Evento.id_formulario,
            requisitos: formData.Requisitos,
            premios: formData.Premios,
            patrocinadores: formData.Patrocinadores,
            contactos: formData.Contactos,
          
          })
          .then(function (response) {
            console.log(response);
            swal({ icon: "success", text: "Evento Creado"});
            navigate("/");
          })
          .catch(function (error) {
            console.log(error.response.data.error);
            alert(error.response.data.error);
          });
      } else {
        axios
          .put(`http://localhost:8000/api/evento/${props.idEvento}`, {
            titulo: formData.TituloDelEvento,
            fecha_ini: formData.FechaDelEvento,
            fecha_fin: null,
            tipo: formData.TipoDelEvento,
            descripcion: formData.Descripcion,
            afiche: formData.AficheDelEvento,
            id_formulario: props.Evento.id_formulario,
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
          <Boton ClaseDeBoton="botonRojoGrand" TipoDeBoton="submit">
            {props.Accion == "crear" ? "Crear evento" : "Editar evento"}
          </Boton>
        </div>
      </form>
    </Background>
  );
};

export default CreateEventSection;
