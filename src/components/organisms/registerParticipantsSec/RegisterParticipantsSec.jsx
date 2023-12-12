import { useState } from "react";

import Background from "../../atoms/background/Background.jsx";
import Boton from "../../atoms/boton/Boton.jsx";
import Label from "../../atoms/label/Label.jsx";
import Formulario from "../../molecules/formulario/Formulario.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import swal from "sweetalert";

const RegisterParticipantsSec = () => {
  const navigate = useNavigate();

  const { id, evento } = useParams();

  const [formulario, setFormulario] = useState([{}]);
  useEffect(() => {
    getAllForms();
  }, []);

  const getAllForms = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/formularios/registro/" + id
    );
    setFormulario(response.data);
  };
  //***
  //aqui debe jalar los datos del formulario
  //***
  const Datos = [
    { pregunta: "Nombre", tipo: "texto" },
    { pregunta: "Apellido", tipo: "texto" },
    { pregunta: "Edad", tipo: "texto" },
    { pregunta: "Cumpleaños", tipo: "Fecha_AFA" },
  ];
  //***
  //***
  const CamposDeEntrada = Datos.map((dato) => {
    return {
      Etiqueta: dato.pregunta,
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: dato.tipo,
      Identificador: dato.pregunta,
      Desactivado: false,
      OpcionesDelDesplegable: [],
      Requisitos:
        dato.tipo === "texto"
          ? "Solo se deben ingresar caracteres alfanumericos"
          : dato.tipo === "Fecha_AFA"
          ? "Solo se debe ingresar una fecha que sea posterior a la de hoy"
          : dato.tipo === "telefono"
          ? "Solo se debe ingresar una fecha que sea posterior a la de hoy"
          : dato.tipo === "email"
          ? "Solo se debe ingresar una fecha que sea posterior a la de hoy"
          : dato.tipo === "nombre"
          ? "Solo se debe ingresar una fecha que sea posterior a la de hoy"
          : "Tipo de dato desconocido",
    };
  });

  const initialFormData = {};
  Datos.forEach((dato) => {
    initialFormData[dato.pregunta] = "";
  });

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const respuestas = Object.entries(formData).map(
      ([pregunta, respuesta]) => ({
        pregunta,
        respuesta,
      })
    );
    //***
    //aqui se mandan las respuestas
    console.log(respuestas);
    //***
    //***
  };

  return (
    <Background Tipo="FondoParticipantes CentrarContenido">
      <Label TipoDeEtiqueta="FormTitle">{evento}</Label>
      <form
        onSubmit={handleFormSubmit}
        id="FormularioParaRegistrarParticipante"
      >
        <Formulario
          CamposDeEntrada={CamposDeEntrada}
          handleChange={handleChange}
          FormData={formData}
        />
        <div className="w3-row w3-center">
          <Boton
            TipoDeBoton="submit"
            ClaseDeBoton="botonRojoGrand"
            form="FormularioParaRegistrarParticipante"
          >
            Registrarse
          </Boton>
        </div>
      </form>
    </Background>
  );
};

export default RegisterParticipantsSec;
