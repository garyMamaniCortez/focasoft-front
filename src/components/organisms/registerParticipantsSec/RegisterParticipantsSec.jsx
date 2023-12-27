import { useState } from "react";

import Background from "../../atoms/background/Background.jsx";
import Boton from "../../atoms/boton/Boton.jsx";
import Label from "../../atoms/label/Label.jsx";
import Formulario from "../../molecules/formulario/Formulario.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInterceptorInstance from "../../../axios/interceptor.js";
import { ENDPOINTS } from "../../../Constants/endpoinst.js";
import swal from "sweetalert";

const RegisterParticipantsSec = () => {
  const navigate = useNavigate();

  const { id, evento } = useParams();

  const [formulario, setFormulario] = useState([]);
  const [hayForm, setHayForm] = useState(false)
  useEffect(() => {
    const getAllForms = async () => {
      try{
      if(id){
        const response = await axiosInterceptorInstance.get(
          ENDPOINTS.ObtenerForm + id
        );
        setFormulario(response.data);
        setHayForm(true)
      }}catch (error) {
        console.error("Error al obtener el formulario:", error);
      }
      
    };
    getAllForms();
    console.log(formulario)
  }, [id]);


  //***
  //aqui debe jalar los datos del formulario
  //***
  const Datos = [
    { pregunta: "Nombres", tipo: "texto" },
    { pregunta: "Apellidos", tipo: "texto" },
    { pregunta: "Fecha de nacimiento", tipo: "Fecha_AFA" },
    { pregunta: "Correo electronico", tipo: "email" },
    { pregunta: "Correo electronico", tipo: "email" },
  ];
  //***
  //***
  const CamposDeEntrada = formulario.map((dato) => {
    return {
      Etiqueta: dato.texto_pregunta,
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: dato.tipo,
      Identificador: dato.texto_pregunta,
      Desactivado: false,
      OpcionesDelDesplegable: [],
      Requisitos:
        (dato.obligatorio===1 ? "CAMPO OBLIGATORIO ," : "") +
        (dato.tipo === "texto"
          ? "Solo se deben ingresar caracteres alfanumericos"
          : dato.tipo === "fecha_AFA"
          ? "Solo se debe ingresar una fecha valida"
          : dato.tipo === "telefono"
          ? "Solo se debe ingresar caracteres numericos"
          : dato.tipo === "email"
          ? "Solo se debe ingresar un correo electronico valido"
          : dato.tipo === "nombre"
          ? "Solo se debe caracteres alfabeticos"
          : "Tipo de dato desconocido"),
    };
  });

  const initialFormData = {};
  formulario.forEach((dato) => {
    initialFormData[dato.texto_pregunta] = "";
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
    console.log(formData);
    const respuestas = Object.entries(formData).map(
      ([pregunta, respuesta]) => ({
        pregunta,
        respuesta,
      })
    
    );
    //***
    //aqui se mandan las respuestas
    console.log(respuestas);
    axiosInterceptorInstance
    .post(ENDPOINTS.registrarParticipante, {
      "id_formulario": id,
      "respuestas": respuestas
    })
    .then(function (response) {
      console.log(response.data.id);
      navigate("/");
    });
  };

  return (
    
    <Background Tipo="FondoParticipantes CentrarContenido">
      { hayForm ? (

      <><Label TipoDeEtiqueta="FormTitle">{evento}</Label><form
          onSubmit={handleFormSubmit}
          id="FormularioParaRegistrarParticipante"
        >
          <Formulario
            CamposDeEntrada={CamposDeEntrada}
            handleChange={handleChange}
            FormData={formData} />
          <div className="w3-row w3-center">
            <Boton
              TipoDeBoton="submit"
              ClaseDeBoton="botonRojoGrand"
              form="FormularioParaRegistrarParticipante"
            >
              Registrarse
            </Boton>
          </div>
        </form></>
) : (
  <p>Loading...</p>
)  
}
    </Background>
  );
  
};

export default RegisterParticipantsSec;
