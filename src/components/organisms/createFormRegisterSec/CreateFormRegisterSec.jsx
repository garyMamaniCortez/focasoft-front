import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import Background from "../../atoms/background/Background";
import Boton from "../../atoms/boton/Boton";
import Formulario from "../../molecules/formulario/Formulario";
import TextInput from "../../atoms/textInput/TextInput";
import Label from "../../atoms/label/Label";
import axiosInterceptorInstance from "../../../axios/interceptor";
import swal from "sweetalert";
import { ENDPOINTS } from "../../../Constants/endpoinst";

import "../Formulario/Formulario.css";

const CreateFormRegisterSec = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [idFormulario, setId] = useState(null);
  const [Campos, setCampos] = useState(props.Campos);
  const [Tipo, setTipo] = useState(props.Tipo);
  const [formData, setFormData] = useState({
    id_evento: 3,
    preguntas: [
      {
        pregunta: "Nombres",
        obligatorio: true,
        tipo: "nombre",
      },
      {
        pregunta: "Telefono",
        obligatorio: true,
        tipo: "texto",
      },
      {
        pregunta: "Fecha de nacimiento",
        obligatorio: true,
        tipo: "fecha_AFA",
      },
      {
        pregunta: "Email",
        obligatorio: true,
        tipo: "email",
      },
    ],
  });
  const [auxFormData, setAuxFormData] = useState({
    pregunta: "",
    obligatorio: false,
    tipo: "",
  });
  const [preguntas, setPreguntas] = useState([
    {
      Etiqueta: "Nombre completo",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Nombres",
      Desactivado: false,
      OpcionesDelDesplegable: [],
      Requisitos: "Recibe una cadena de caracteres alfanumerico",
    },
    {
      Etiqueta: "Telefono",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Apellidos",
      Desactivado: false,
      OpcionesDelDesplegable: [],
      Requisitos: "Recibe una cadena de caracteres numerico",
    },
    {
      Etiqueta: "Fecha de nacimiento",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "FechaDenacimiento",
      Desactivado: false,
      OpcionesDelDesplegable: [],
      Requisitos: "Recibe una fecha en el formato dd/mm/aa",
    },
    {
      Etiqueta: "Correo electronico",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "email",
      Identificador: "email",
      Desactivado: false,
      OpcionesDelDesplegable: [],
      Requisitos: "Recibe una cadena de caracteres alfanumericos",
    },
  ]);

  const handleChange = (event) => {
    const { value } = event.target;
    setAuxFormData(() => value);
  };

  const ManejarCambioPregunta = (event) => {
    setAuxFormData((prevFormData) => ({
      ...prevFormData,
      pregunta:
        event.target.value.charAt(0).toUpperCase() +
        event.target.value.slice(1).toLowerCase(),
    }));
  };

  const ManejarCambioObligatiorio = (event) => {
    setAuxFormData((prevFormData) => ({
      ...prevFormData,
      obligatorio: event.target.checked,
    }));
  };

  const ManejarCambioTipo = (event) => {
    setAuxFormData((prevFormData) => ({
      ...prevFormData,
      tipo: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosInterceptorInstance
      .post(ENDPOINTS.crearFormulario, {
        id_evento: id,
        preguntas: formData.preguntas,
      })
      .then(function (response) {
        console.log(response.data.id);
        navigate("/admin");
      });
  };

  const AgregarCampo = () => {
    if (auxFormData.pregunta !== "" && auxFormData.tipo !== "") {
      if (
        auxFormData.pregunta !== "Nombres" &&
        auxFormData.pregunta !== "Telefono" &&
        auxFormData.pregunta !== "Fecha de nacimiento" &&
        auxFormData.pregunta !== "Email"
      ) {
        const indiceCampo = preguntas.findIndex(
          (pregunta) => pregunta.Etiqueta === auxFormData.pregunta
        );

        if (indiceCampo !== -1) {
          setPreguntas((prevPreguntas) => {
            const preguntaModificada = [...prevPreguntas];
            preguntaModificada[indiceCampo] = {
              Etiqueta: auxFormData.pregunta,
              TipoDeEtiqueta: "FormLabel",
              TipoDeEntrada: auxFormData.tipo,
              Identificador: "",
              Desactivado: false,
              OpcionesDelDesplegable: [],
              Requisitos: auxFormData.obligatorio
                ? "Es un campo obligatorio" + ", Es de tipo " + auxFormData.tipo
                : "No es un campo obligatorio" +
                  ", Es de tipo " +
                  auxFormData.tipo,
            };
            return preguntaModificada;
          });
        } else {
          setPreguntas((prevPreguntas) => [
            ...prevPreguntas,
            {
              Etiqueta: auxFormData.pregunta,
              TipoDeEtiqueta: "FormLabel",
              TipoDeEntrada: auxFormData.tipo,
              Identificador: "",
              Desactivado: false,
              OpcionesDelDesplegable: [],
              Requisitos: auxFormData.obligatorio
                ? "Es un campo obligatorio" + ", Es de tipo " + auxFormData.tipo
                : "No es un campo obligatorio" +
                  ", Es de tipo " +
                  auxFormData.tipo,
            },
          ]);
        }

        const nuevaPregunta = {
          pregunta: auxFormData.pregunta,
          obligatorio: auxFormData.obligatorio,
          tipo: auxFormData.tipo,
        };

        const indicePregunta = formData.preguntas.findIndex(
          (preguntaExistente) =>
            preguntaExistente.pregunta === nuevaPregunta.pregunta
        );

        if (indicePregunta !== -1) {
          setFormData((prevFormData) => {
            const nuevasPreguntas = [...prevFormData.preguntas];
            nuevasPreguntas[indicePregunta] = nuevaPregunta;
            return { ...prevFormData, preguntas: nuevasPreguntas };
          });
        } else {
          setFormData((prevFormData) => ({
            ...prevFormData,
            preguntas: [...prevFormData.preguntas, nuevaPregunta],
          }));
        }
      } else {
        swal({
          icon: "error",
          text: "No puedes modificar los campos Nombres, Telefono, Fecha ni Email",
        });
      }
    }
    console.log(formData.preguntas);
  };

  const EliminarCampo = () => {
    if (auxFormData.pregunta !== "") {
      if (
        auxFormData.pregunta !== "Nombre completo" &&
        auxFormData.pregunta !== "Telefono" &&
        auxFormData.pregunta !== "Fecha" &&
        auxFormData.pregunta !== "Correo electronico"
      ) {
        setPreguntas((prevPreguntas) =>
          prevPreguntas.filter(
            (pregunta) => pregunta.Etiqueta !== auxFormData.pregunta
          )
        );

        setFormData((prevFormData) => ({
          ...prevFormData,
          preguntas: prevFormData.preguntas.filter(
            (pregunta) => pregunta.pregunta !== auxFormData.pregunta
          ),
        }));
      } else {
        swal({
          icon: "error",
          text: "No puedes eliminar los campos Nombres, Telefono, Fecha ni Email",
        });
      }
    }
    console.log(formData.preguntas);
  };

  return (
    <Background Tipo="Predeterminado">
      <form onSubmit={handleSubmit}>
        <Formulario
          CamposDeEntrada={preguntas}
          handleSubmit={handleChange}
          FormData={[]}
          Desactivado={true}
        />
        {Tipo !== "Competencia" && (
          <div className="ContenedorSeleccionarCampo">
            <Label TipoDeEtiqueta="EtiquetaFormulario2">
              Modificar campos de entrada
            </Label>
            <Label TipoDeEtiqueta="FormularioRequisitos">
              Esta seccion se podra agregar, eliminar y modificar campos del
              formulario de registro de participante, para esto es necesario
              indicar el nombre del campo, que tipo de dato admite y si es
              obligatorio o no
            </Label>
            <br /> <br />
            <div className="ContenedorCampo">

              <Label TipoDeEtiqueta="FormLabel">Nombre del campo</Label>

              <div className="ContenedorEntrada">
                <TextInput
                  TipoDeEntrada="text"
                  Identificador="Nombre"
                  ManejarCambio={ManejarCambioPregunta}
                  OpcionesDelDesplegable={[]}
                  Desactivado={false}
                />
                <Label TipoDeEtiqueta="FormularioRequisitos">
                  Se debe introducir una cadena de caracteres
                </Label>
              </div>
            </div>
            <div className="ContenedorCampo">
              <Label TipoDeEtiqueta="FormLabel">Tipo</Label>
              <div className="ContenedorEntrada CentrarContenido">
                <TextInput
                  TipoDeEntrada="selectPequeño"
                  Identificador="Tipo"
                  ManejarCambio={ManejarCambioTipo}
                  OpcionesDelDesplegable={[
                    {
                      Valor: "",
                      Etiqueta: ". . .",
                    },
                    {
                      Valor: "nombre",
                      Etiqueta: "Alfabetico",
                    },
                    {
                      Valor: "texto",
                      Etiqueta: "Alfanumerico",
                    },
                    {
                      Valor: "telefono",
                      Etiqueta: "Numerico",
                    },
                    {
                      Valor: "fecha_AFA",
                      Etiqueta: "Fecha",
                    },
                    {
                      Valor: "email",
                      Etiqueta: "Email",
                    },
                  ]}
                  Desactivado={false}
                />
                <Label TipoDeEtiqueta="FormularioRequisitos">
                  Se debe seleccionr que tipo de de dato admitira el campo
                </Label>
              </div>
              <Label TipoDeEtiqueta="FormLabel">Obligatorio</Label>
              <div className="ContenedorEntrada CentrarContenido">
                <TextInput
                  TipoDeEntrada="checkbox"
                  Identificador="Obligatorio"
                  ManejarCambio={ManejarCambioObligatiorio}
                  OpcionesDelDesplegable={[]}
                  Desactivado={false}
                />
                <Label TipoDeEtiqueta="FormularioRequisitos">

                  Se debe indicar si es que el campo sera obligatorio o no

                </Label>
              </div>
            </div>
            <div className="Botones">
              <Boton
                ClaseDeBoton="botonAzulPequeño"
                TipoDeBoton="button"
                f={AgregarCampo}
              >
                Agregar
              </Boton>
              <Boton
                ClaseDeBoton="botonAmarilloPeq"
                TipoDeBoton="button"
                f={EliminarCampo}
              >
                Eliminar
              </Boton>
            </div>
          </div>
        )}
        <div className="w3-row w3-center">
          <div className="createEventButton w3-col l6">
            <Boton ClaseDeBoton="botonAmarilloGrand" TipoDeBoton="submit">
              Guardar formulario
            </Boton>
          </div>
          <div className="w3-col l6">
            <Link to="/admin">
              <Boton ClaseDeBoton="botonRojoGrand" TipoDeBoton="button">
                Cancelar
              </Boton>
            </Link>
          </div>
        </div>
      </form>
    </Background>
  );
};

export default CreateFormRegisterSec;
