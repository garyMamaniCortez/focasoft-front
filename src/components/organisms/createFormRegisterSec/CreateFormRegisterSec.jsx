import { useState } from "react";

import Background from "../../atoms/background/Background";
import Boton from "../../atoms/boton/Boton";
import Formulario from "../../molecules/formulario/Formulario";
import { useAppContext } from "../../../Context";
import TextInput from "../../atoms/textInput/TextInput";
import Label from "../../atoms/label/Label";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreateFormRegisterSec = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [idFormulario, setId]=useState(null)

  const [CamposDeEntrada, setCamposDeEntrada] = useState([
    {
      divClase: "itemContainer",
      Etiqueta: "Nombres",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Nombres",
      Desactivado: true,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Apellidos",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Apellidos",
      Desactivado: true,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Fecha de nacimiento",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "date",
      Identificador: "FechaDenacimiento",
      Desactivado: true,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Correo electronico",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "CorreoElectronico",
      Desactivado: true,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Numero de Celular",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "NumeroDeCelular",
      Desactivado: true,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
    },
    {
      divClase: "invisible",
      Etiqueta: "Talla De Polera",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "TallaDePolera",
      Desactivado: true,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
    },
    {
      divClase: "invisible",
      Etiqueta: "Codigo SIS o\nInstitucion",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "CodigoSISOInstitucion",
      Desactivado: true,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
    },
    {
      divClase: "invisible",
      Etiqueta: "Carnet De Identidad",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "CarnetDeIdentidad",
      Desactivado: true,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
    },
    {
      divClase: "invisible",
      Etiqueta: "Carrera",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Carrera",
      Desactivado: true,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
    },
    {
      divClase: "invisible",
      Etiqueta: "Semestre",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Semestre",
      Desactivado: true,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
    },
  ]);

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
        axios.post("http://localhost:8000/api/evento/agregarFormulario",{
          id_evento: id,
          id_formulario: response.data.id
        })
        .then(function (response) {
          console.log(response);
        });
        navigate("/admin")
      });

      
  };

  const AgregarCampo = () => {
    if (auxFormData !== "") {
      setFormData((prevFormData) => ({ ...prevFormData, [auxFormData]: 1 }));
      setCamposDeEntrada((prevCampos) =>
        prevCampos.map((campo) => {
          if (campo.Identificador === auxFormData) {
            return { ...campo, divClase: "itemContainer" };
          }
          return campo;
        })
      );

      if (
        auxFormData !== "" &&
        !CamposDeEntrada.some((item) => item.Identificador === auxFormData)
      ) {
        setCamposDeEntrada((prevFormData) => [
          ...prevFormData,
          {
            divClase: "invisible",
            Etiqueta:
              auxFormData === "TallaDePolera"
                ? "Talla De Polera"
                : auxFormData === "CodigoSISOInstitucion"
                ? "Codigo SIS o\nInstitucion"
                : auxFormData === "CarnetDeIdentidad"
                ? "Carnet De Identidad"
                : auxFormData,
            TipoDeEtiqueta: "FormLabel",
            TipoDeEntrada: "text",
            Identificador: auxFormData,
            Desactivado: true,
            OpcionesDelDesplegable: [
              { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
            ],
          },
        ]);
      }
    }
  };

  const EliminarCampo = () => {
    if (auxFormData !== "") {
      setFormData((prevFormData) => ({ ...prevFormData, [auxFormData]: 0 }));
      setCamposDeEntrada((prevCampos) =>
        prevCampos.map((campo) => {
          if (campo.Identificador === auxFormData) {
            return { ...campo, divClase: "invisible" };
          }
          return campo;
        })
      );
    }
  };

  const goBack = () => {
    navigate("/CrearEvento");
  };
  return (
    <Background>
      <form onSubmit={handleSubmit}>
        <Formulario
          CamposDeEntrada={CamposDeEntrada}
          handleSubmit={handleChange}
          FormData={formData}
          Desactivado={true}
        />
        <div className="itemContainer">
          <Label TipoDeEtiqueta="FormLabel">Añadir Campo</Label>
          <TextInput
            TipoDeEntrada="select"
            Identificador="AñadirCampo"
            ManejarCambio={handleChange}
            Desactivado={false}
            OpcionesDelDesplegable={[
              { Valor: "", Etiqueta: "Selecciona un campo" },
              { Valor: "Carrera", Etiqueta: "Carrera" },
              { Valor: "TallaDePolera", Etiqueta: "Talla De Polera" },
              { Valor: "CarnetDeIdentidad", Etiqueta: "Carnet De Identidad" },
              {
                Valor: "CodigoSISOInstitucion",
                Etiqueta: "Codigo SIS o Institucion",
              },
              { Valor: "Semestre", Etiqueta: "Semestre" },
            ]}
          />
        </div>
        <div className="w3-center w3-margin">
          <Boton ClaseDeBoton="botonAzul" TipoDeBoton="button" f={AgregarCampo}>
            Añadir Pregunta
          </Boton>
          <Boton
            ClaseDeBoton="botonAmarilloPeq"
            TipoDeBoton="button"
            f={EliminarCampo}
          >
            X
          </Boton>
        </div>
        <div className="w3-row w3-center">
          <div className="createEventButton w3-col l6">
            <Boton ClaseDeBoton="botonAmarilloGrand" TipoDeBoton="submit">
              Guardar formulario
            </Boton>
          </div>
          <div className="w3-col l6">
            <Link to ="/admin">
                <Boton
                  ClaseDeBoton="botonRojoGrand"
                  TipoDeBoton="button"
                >
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
