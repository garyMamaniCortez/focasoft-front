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

const CreateFormRegisterSec = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [idFormulario, setId] = useState(null);

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
      Requisitos: "Recibe un una cadena de caracteres alfanumerico",
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
      Requisitos: "Recibe un una cadena de caracteres alfanumerico",
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
      Requisitos: "Recibe un una facha en el formato dd/mm/aa",
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
      Requisitos:
        "Recibe un una cadena que siga un formato de correo electronico",
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
      Requisitos:
        "Recibe un una cadena de caracteres numericos de un telefono celular valido",
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
      Requisitos:
        "Es uns desplegable",
    },
    {
      divClase: "invisible",
      Etiqueta: "Codigo SIS",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "CodigoSIS",
      Desactivado: true,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos:
        "Recibe un codigo SIS valido",
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
      Requisitos:
        "Recibe un cadena como numero CI",
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
      Requisitos:
        "Es un desplegable don las opciones son un conjunto de carreras",
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
      Requisitos:
        "Es un desplegable donde las opciones son numeros desde el 0 hasta el 12",
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
  };

  const AgregarCampo = () => {
    if (auxFormData !== "") {
      setFormData((prevFormData) => ({ ...prevFormData, [auxFormData]: "" }));
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
            Requisitos: "Soy un requisito",
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

  return (
    <Background>
      <form onSubmit={handleSubmit}>
        <Formulario
          CamposDeEntrada={CamposDeEntrada}
          handleSubmit={handleChange}
          FormData={formData}
          Desactivado={true}
        />

        <div className="ContenedorSeleccionarCampo">
          <Label TipoDeEtiqueta="EtiquetaFormulario2">
            Selecciona un campo
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
                { Valor: "CarnetDeIdentidad", Etiqueta: "Carnet De Identidad" },
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
            Se debe seleccionar el campo el cual se desea agregar o retirar,
            ningun campo podra agregarse mas de una vez{" "}
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
