import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

import swal from "sweetalert";

import Formulario from "../../molecules/formulario/Formulario.jsx";
import Boton from "../../atoms/boton/Boton.jsx";
import Background from "../../atoms/background/Background.jsx";
import { useAppContext } from "../../../Context";
import axios from "axios";

const CreateEventSection = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(props.Evento);
  const [misCampos, setMisCampos] = useState(props.Campos);

  const modificar = 3;

  const copiaCampos = [...misCampos];
  
  copiaCampos[modificar]= {
    ...copiaCampos[modificar],
    Desactivado: 
      (formData.TipoDelEvento === "Competencia" ? false
      : true)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;   
    setMisCampos(copiaCampos);  
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
    console.log(misCampos);
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

    //Validacion del Titulo del evento
    if (
      !formData.TituloDelEvento.trim() ||
      typeof formData.TituloDelEvento === "undefined"
    ) {
      errors.push("- El campo Titulo del evento no puede estar vacío");
    } else if (!validarAlfanumericos.test(formData.TituloDelEvento)) {
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
    } else if (props.Accion === "crear") {
      if (fechaDelEvento <= hoy) {
        errors.push(
          "- La Fecha del evento debe ser una fecha posterior a la de hoy."
        );
      }
    } else {
      if (fechaDelEvento < hoy) {
        errors.push(
          "- La Fecha del evento no puede ser una fecha anterior a la de hoy."
        );
      }
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
    } else if (!validarDescripcion.test(formData.Descripcion)) {
      errors.push(
        "- El campo descripción solo debe contener caracteres alfanumericos"
      );
    }

    //Validacion para Requisitos
    formData.Requisitos =
      formData.Requisitos === null
        ? [" "]
        : formData.Requisitos === ""
        ? [" "]
        : formData.Requisitos;
    if (
      !validarListas.test(formData.Requisitos) ||
      typeof formData.Requisitos === "undefined"
    ) {
      errors.push(
        "- El campo Requisitos solo debe contener carcteres alfanumericos."
      );
    } else if (formData.Requisitos.includes(",")) {
      formData.Requisitos.split(",").map(function (item) {
        return item.trim();
      });
    }

    //Validacion para Premios
    formData.Premios =
      formData.Premios === null
        ? [" "]
        : formData.Premios === ""
        ? [" "]
        : formData.Premios;
    if (
      !validarListas.test(formData.Premios) ||
      typeof formData.Premios === "undefined"
    ) {
      errors.push(
        "- El campo Premios solo debe contener carcteres alfanumericos."
      );
    } else if (formData.Premios.includes(",")) {
      formData.Premios.split(",").map(function (item) {
        return item.trim();
      });
    }

    // Validacion para Patrocinadores
    formData.Patrocinadores =
      formData.Patrocinadores === null ? [" "] : formData.Patrocinadores;
    if (
      !validarListas.test(formData.Patrocinadores) ||
      typeof formData.Patrocinadores === "undefined"
    ) {
      errors.push(
        "- El campo Patrocinadores solo debe contener carcteres alfanumericos."
      );
    } else if (formData.Patrocinadores.includes(",")) {
      formData.Patrocinadores.split(",").map(function (item) {
        return item.trim();
      });
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
      if (props.Accion == "crear") {
        axios
          .post("http://localhost:8000/api/evento", {
            titulo: formData.TituloDelEvento,
            fecha_ini: formData.FechaDelEvento,
            fecha_fin: null,
            tipo: formData.TipoDelEvento,
            equipo: formData.Equipo
              == "on" ? true : false
            ,
            descripcion: formData.Descripcion,
            afiche: formData.AficheDelEvento,
            id_formulario: props.Evento.id_formulario,
            requisitos: formData.Requisitos,
            premios: formData.Premios,
            patrocinadores: null,
            contactos: formData.Contactos,
          })
          .then(function (response) {
            swal({ icon: "success", text: "Evento Creado" });
            console.log(response);
            navigate("/admin");
          })
          .catch(function (error) {
            console.log(error.response.data.error);
            swal({ icon: "error", text: error.response.data.error });
          });
      } else {
        axios
          .put(`http://localhost:8000/api/evento/${props.idEvento}`, {
            titulo: formData.TituloDelEvento,
            fecha_ini: formData.FechaDelEvento,
            fecha_fin: null,
            tipo: formData.TipoDelEvento,
            equipo: formData.Equipo,
            descripcion: formData.Descripcion,
            afiche: formData.AficheDelEvento,
            id_formulario: props.Evento.id_formulario,            
            patrocinadores: formData.Patrocinadores,
            contacto: formData.Contacto,
            requisitos: formData.Requisitos,
            premios: formData.Premios,
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
    }
  };

  return (
    <Background  Tipo="FondoEvento">
      <form onSubmit={handleSubmit}>
        <Formulario
          CamposDeEntrada={misCampos}
          handleChange={handleChange}
          Desactivado={false}
          FormData={formData}          
        />
        <div className="w3-row w3-center">
          <Boton ClaseDeBoton="botonRojoGrand" TipoDeBoton="submit">
            {props.Accion === "crear" ? "Crear evento" : "Editar evento"}
          </Boton>
        </div>
      </form>
    </Background>
  );
};

export default CreateEventSection;
