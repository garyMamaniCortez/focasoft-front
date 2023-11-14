import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import Background from "../../atoms/background/Background";
import Boton from "../../atoms/boton/Boton";
import Formulario from "../../molecules/formulario/Formulario";
import TextInput from "../../atoms/textInput/TextInput";
import Label from "../../atoms/label/Label";

import axios from "axios";

import "../Formulario/Formulario.css";

const CreateFormRegisterSec = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [idFormulario, setId] = useState(null);

  const [Campos, setCampos] = useState(props.Campos);
  const [Tipo, setTipo] = useState(props.Tipo);

  const [formData, setFormData] = useState({
    Carrera: 0,
    TallaDePolera: 0,
    CarnetDeIdentidad: 0,
    CodigoSISOInstitucion: 0,
    Semestre: 0,
  });

  const [auxFormData, setAuxFormData] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setAuxFormData(() => value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Tipo === "Competencia") {
      axios
        .post("http://localhost:8000/api/formularios/registroCompetencia", {
          NombreEquipo: 1,
          NombresRepresentante: 1,
          ApellidosRepresentante: 1,
          CorreoRepresentante: 1,
          CelularRepresentante: 1,
          CantidadDeParticipantes: 1,
        })
        .then(function (response) {
          console.log(response.data.id);
          setId(response.data.id);
          axios
            .post("http://localhost:8000/api/evento/agregarFormulario", {
              id_evento: id,
              id_formulario: response.data.id,
            })
            .then(function (response) {
              console.log(response);
            });
          navigate("/admin");
        });
    } else {
      axios
        .post("http://localhost:8000/api/formularios/registro", {
          nombres: 1,
          apellidos: 1,
          fecha_nacimiento: 1,
          correo_electronico: 1,
          numero_celular: 1,
          carrera: formData.Carrera,
          talla_polera: formData.TallaDePolera,
          carnet_identidad: formData.CarnetDeIdentidad,
          codigo_sis_o_institucion: formData.CodigoSISOInstitucion,
          semestre: formData.Semestre,
        })
        .then(function (response) {
          console.log(response.data.id);
          setId(response.data.id);
          axios
            .post("http://localhost:8000/api/evento/agregarFormulario", {
              id_evento: id,
              id_formulario: response.data.id,
            })
            .then(function (response) {
              console.log(response);
            });
          navigate("/admin");
        });
    }
  };

  const AgregarCampo = () => {
    if (auxFormData !== "") {
      setFormData((prevFormData) => ({ ...prevFormData, [auxFormData]: 1 }));
      setCampos((prevCampos) =>
        prevCampos.map((Campo) => {
          if (Campo.Identificador === auxFormData) {
            return { ...Campo, Desactivado: false };
          }
          return Campo;
        })
      );
    }
  };

  const EliminarCampo = () => {
    if (auxFormData !== "") {
      setFormData((prevFormData) => ({ ...prevFormData, [auxFormData]: 0 }));
      setCampos((prevCampos) =>
        prevCampos.map((Campo) => {
          if (Campo.Identificador === auxFormData) {
            return { ...Campo, Desactivado: true };
          }
          return Campo;
        })
      );
    }
    console.log(formData);
  };

  return (
    <Background>
      <form onSubmit={handleSubmit}>
        <Formulario
          CamposDeEntrada={Campos}
          handleSubmit={handleChange}
          FormData={[]}
          Desactivado={true}
        />
        {Tipo !== "Competencia" && (
          <div className="ContenedorSeleccionarCampo">
            <Label TipoDeEtiqueta="EtiquetaFormulario2">
              Selecciona un Campo
            </Label>
            <div className="Select">
              <TextInput
                TipoDeEntrada="select"
                Identificador="AñadirCampo"
                ManejarCambio={handleChange}
                Desactivado={false}
                OpcionesDelDesplegable={[
                  { Valor: "", Etiqueta: "..." },
                  { Valor: "Carrera", Etiqueta: "Carrera" },
                  { Valor: "TallaDePolera", Etiqueta: "Talla De Polera" },
                  {
                    Valor: "CarnetDeIdentidad",
                    Etiqueta: "Carnet De Identidad",
                  },
                  {
                    Valor: "CodigoSISOInstitucion",
                    Etiqueta: "Codigo SIS o Institucion",
                  },
                  { Valor: "Semestre", Etiqueta: "Semestre" },
                ]}
              />
            </div>
            <Label TipoDeEtiqueta="DescripcionCampo">
              {" "}
              Se debe seleccionar el Campo el cual se desea agregar o retirar,
              ningun Campo podra agregarse mas de una vez{" "}
            </Label>
            <div className="Botones">
              <Boton
                ClaseDeBoton="AzulPequeño"
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
