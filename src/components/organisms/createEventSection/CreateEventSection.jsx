import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Formulario from "../../molecules/formulario/Formulario.jsx";
import Boton from "../../atoms/boton/Boton.jsx";
import Background from "../../atoms/background/Background.jsx";
import { useAppContext } from "../../../Context";
import axios from "axios";

const CreateEventSection = ({ Campos } , props) => {
  const navigate = useNavigate();
  const id = useAppContext();
  const [imagen, setImagen]= useState(null);
  console.log(props.accion)

  //Los valores de los atributos son valores por defecto
  
  const Valores = Campos.reduce((resultado, campo) => {
    resultado[campo.Identificador] = campo.Valor;
    return resultado;
  }, {});

  const [formData, setFormData] = useState({
    TituloDelEvento: "",
    FechaDelEvento: "",
    FechaFinDelEvento: "",
    TipoDelEvento: "",
    Descripcion: "",
    AficheDelEvento: "",
    Requisitos: [""],
    Premios: [""],
    Patrocinadores: [""],
    idFormulario: "",
    Contactos: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if(name!="AficheDelEvento"){
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }else{
      setImagen(event.target.files[0])
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
      alert(`El evento ${formData.TituloDelEvento} se creo exitosamente`);
      axios
        .post("http://localhost:8000/api/evento", {
          titulo: formData.TituloDelEvento,
          fecha_ini: formData.FechaDelEvento,
          fecha_fin: formData.FechaFinDelEvento,
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
  };

  return (
    <Background>
      <form onSubmit={handleSubmit}>
        <Formulario
          CamposDeEntrada={Campos}
          handleChange={handleChange}
          Desactivado={false}
          FormData={formData}
        />
        <div className="w3-row w3-center">
          <div className="createEventButton w3-col l6">
            <Link to="/CrearEvento/AgregarFormulario">
              <Boton ClaseDeBoton="botonAmarilloGrand">
                Formulario de registro
              </Boton>
            </Link>
          </div>
          <div className="w3-col l6">
            <Boton ClaseDeBoton="botonRojoGrand" TipoDeBoton="submit">
              Crear evento
            </Boton>
          </div>
        </div>
      </form>
    </Background>
  );
};

export default CreateEventSection;
