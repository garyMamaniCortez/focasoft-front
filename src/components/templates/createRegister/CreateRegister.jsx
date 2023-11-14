import Formulario from "../../organisms/createFormRegisterSec/CreateFormRegisterSec.jsx";
import "./CreateRegister.css";
import "w3-css";

const CreateRegister = (props) => {
  const Tipo = props.Tipo;

  const Campos =
    Tipo === "Competencia"
      ? [
          {
            divClase: "itemContainer",
            Etiqueta: "Nombre del Equipo",
            TipoDeEtiqueta: "FormLabel",
            TipoDeEntrada: "text",
            Identificador: "NombreDelEquipo",
            Desactivado: false,
            OpcionesDelDesplegable: [
              { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
            ],
            Requisitos: "Recibe un una cadena de caracteres alfanumerico",
          },
          {
            divClase: "itemContainer",
            Etiqueta: "Apellidos del representante",
            TipoDeEtiqueta: "FormLabel",
            TipoDeEntrada: "text",
            Identificador: "ApellidosDelRepresentante",
            Desactivado: false,
            OpcionesDelDesplegable: [
              { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
            ],
            Requisitos: "Recibe un una cadena de caracteres alfanumerico",
          },
          {
            divClase: "itemContainer",
            Etiqueta: "Correo electronico del representante",
            TipoDeEtiqueta: "FormLabel",
            TipoDeEntrada: "text",
            Identificador: "CorreoElectronico",
            Desactivado: false,
            OpcionesDelDesplegable: [
              { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
            ],
            Requisitos:
              "Recibe un una cadena que siga un formato de correo electronico",
          },
          {
            divClase: "itemContainer",
            Etiqueta: "Numero de Celular del representante",
            TipoDeEtiqueta: "FormLabel",
            TipoDeEntrada: "text",
            Identificador: "NumeroDeCelular",
            Desactivado: false,
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
            Requisitos: "Es un desplegable donde se debe seleccionar la talla de polera",
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
            Requisitos: "Recibe un codigo SIS valido",
          },
          {
            divClase: "invisible",
            Etiqueta: "Carnet De Identidad",
            TipoDeEtiqueta: "FormLabel",
            TipoDeEntrada: "text",
            Identificador: "CarnetDeIdentidad del representante",
            Desactivado: true,
            OpcionesDelDesplegable: [
              { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
            ],
            Requisitos: "Recibe un cadena como numero CI",
          },
          {
            divClase: "invisible",
            Etiqueta: "Cantidad de participantes",
            TipoDeEtiqueta: "FormLabel",
            TipoDeEntrada: "text",
            Identificador: "CantidadDeParticipantes",
            Desactivado: false,
            OpcionesDelDesplegable: [],
            Requisitos:
              "Es un desplegable don las opciones son un conjunto de carreras",
          }
        ]
      : [
          {
            Etiqueta: "Nombres",
            TipoDeEtiqueta: "FormLabel",
            TipoDeEntrada: "text",
            Identificador: "Nombres",
            Desactivado: false,
            OpcionesDelDesplegable: [
              { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
            ],
            Requisitos: "Recibe un una cadena de caracteres alfanumerico",
          },
          {
            Etiqueta: "Apellidos",
            TipoDeEtiqueta: "FormLabel",
            TipoDeEntrada: "text",
            Identificador: "Apellidos",
            Desactivado: false,
            OpcionesDelDesplegable: [
              { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
            ],
            Requisitos: "Recibe un una cadena de caracteres alfanumerico",
          },
          {
            Etiqueta: "Fecha de nacimiento",
            TipoDeEtiqueta: "FormLabel",
            TipoDeEntrada: "date",
            Identificador: "FechaDenacimiento",
            Desactivado: false,
            OpcionesDelDesplegable: [
              { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
            ],
            Requisitos: "Recibe un una facha en el formato dd/mm/aa",
          },
          {
            Etiqueta: "Correo electronico",
            TipoDeEtiqueta: "FormLabel",
            TipoDeEntrada: "text",
            Identificador: "CorreoElectronico",
            Desactivado: false,
            OpcionesDelDesplegable: [
              { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
            ],
            Requisitos:
              "Recibe un una cadena que siga un formato de correo electronico",
          },
          {
            Etiqueta: "Numero de Celular",
            TipoDeEtiqueta: "FormLabel",
            TipoDeEntrada: "text",
            Identificador: "NumeroDeCelular",
            Desactivado: false,
            OpcionesDelDesplegable: [
              { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
            ],
            Requisitos:
              "Recibe un una cadena de caracteres numericos de un telefono celular valido",
          },
          {
            Etiqueta: "Talla De Polera",
            TipoDeEtiqueta: "FormLabel",
            TipoDeEntrada: "text",
            Identificador: "TallaDePolera",
            Desactivado: true,
            OpcionesDelDesplegable: [
              { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
            ],
            Requisitos: "Es uns desplegable",
          },
          {
            Etiqueta: "Codigo SIS",
            TipoDeEtiqueta: "FormLabel",
            TipoDeEntrada: "text",
            Identificador: "CodigoSIS",
            Desactivado: true,
            OpcionesDelDesplegable: [
              { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
            ],
            Requisitos: "Recibe un codigo SIS valido",
          },
          {
            Etiqueta: "Carnet De Identidad",
            TipoDeEtiqueta: "FormLabel",
            TipoDeEntrada: "text",
            Identificador: "CarnetDeIdentidad",
            Desactivado: true,
            OpcionesDelDesplegable: [
              { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
            ],
            Requisitos: "Recibe un cadena como numero CI",
          },
          {
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
        ];

  return (
    <div className="vistaContent w3-right">
      <h1 className="TituloDeSeccion">Crear Formulario de Registro</h1>
      <div className="SeccionCrearFormularioDeRegistro">
        <Formulario Campos={Campos} Tipo={Tipo} />
      </div>
    </div>
  );
};

export default CreateRegister;
