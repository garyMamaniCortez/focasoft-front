import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Formulario from "../../molecules/formulario/Formulario.jsx";
import Boton from "../../atoms/boton/Boton.jsx";
import Background from "../../atoms/background/Background.jsx";
import { useAppContext } from "../../../Context";
import axios from "axios";

const CreateEventSection = ({Campos}) => {
  const navigate = useNavigate();
  const id = useAppContext();

  //Los valores de los atributos son valores por defecto

  const Valores = {
    TituloDelEvento: "",
    FechaDelEvento: "",
    FechaFinDelEvento: "",
    TipoDelEvento: "",
    Descripcion: "",
    AficheDelEvento: "",
    Requisitos: "",
    Premios: "",
    Patrocinadores: "",
    idFormulario: "",
    Contactos: "",
  };

  const [formData, setFormData] = useState(Valores);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationRegex = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚ]+$/;
    const optionalValidationRegex = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚ]*$/;
    const errors = [];
    const hoy = new Date();
    const fechaDelEvento = new Date(formData.FechaDelEvento);

    if (!formData.TituloDelEvento.trim()) {
      errors.push("- El campo Titulo del evento no puede estar vacío");
    }
    if (!validationRegex.test(formData.TituloDelEvento)) {
      errors.push(
        "- El Titulo del evento solo debe contener caracteres alfanumericos"
      );
    }
    if (!formData.FechaDelEvento.trim()) {
      errors.push("- El campo Fecha del evento no puede estar vacío.");
    }
    if (fechaDelEvento <= hoy) {
      errors.push(
        "- La Fecha del evento debe ser una fecha posterior a la de hoy."
      );
    }
    if (
      !formData.TipoDelEvento.trim() ||
      formData.TipoDelEvento === "Sin seleccionar"
    ) {
      errors.push("- Debes escoger un tipo del evento.");
    }
    if (
      !formData.Descripcion.trim() ||
      !validationRegex.test(formData.Descripcion)
    ) {
      errors.push("- El campo descripción no puede estar vacío.");
    }
    if (!optionalValidationRegex.test(formData.Requisitos)) {
      errors.push("- El campo Requisitos solo debe contener letras y números.");
    }
    if (!optionalValidationRegex.test(formData.TipoDelEvento)) {
      errors.push("- El campo Premios solo debe contener letras y números.");
    }
    if (!optionalValidationRegex.test(formData.Patrocinadores)) {
      errors.push(
        "- El campo Patrocinadores solo debe contener letras y números."
      );
    }
    if (!optionalValidationRegex.test(formData.Contactos)) {
      errors.push("- El campo Contactos solo debe contener letras y números.");
    }

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
