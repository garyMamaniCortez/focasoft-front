import { useState } from "react";

import Background from "../../atoms/background/Background.jsx";
import Boton from "../../atoms/boton/Boton.jsx";
import Label from "../../atoms/label/Label.jsx";
import Formulario from "../../molecules/formulario/Formulario.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterParticipantsSec = (props) => {
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

  const CamposDeEntrada = [
    {
      divClase: "itemContainer",
      Etiqueta: "Nombres",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Nombres",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos: "Debes selecionar una talla de polera"
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Apellidos",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Apellidos",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos: "Debes selecionar una talla de polera"
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Fecha de nacimiento",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "date",
      Identificador: "FechaDeNacimiento",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos: "Debes selecionar una talla de polera"
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Correo electronico",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "email",
      Identificador: "CorreoElectronico",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos: "Debes selecionar una talla de polera"
    },
    {
      divClase: "itemContainer",
      Etiqueta: "Numero de Celular",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "NumeroDeCelular",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos: "Debes selecionar una talla de polera"
    },

    {
      divClase: formulario.carrera === 0 ? "invisible" : "itemContainer",
      Etiqueta: "Carrera",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "Carrera",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos: "Debes selecionar una talla de polera"
    },

    {
      divClase: formulario.talla_polera === 0 ? "invisible" : "itemContainer",
      Etiqueta: "Talla de polera",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "select",
      Identificador: "TallaDePolera",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un talla" },
        { Valor: "XS", Etiqueta: "XS" },
        { Valor: "S", Etiqueta: "S" },
        { Valor: "M", Etiqueta: "M" },
        { Valor: "L", Etiqueta: "L" },
        { Valor: "XL", Etiqueta: "XL" },
        { Valor: "XXL", Etiqueta: "XXL" },
      ],
      Requisitos: "Debes selecionar una talla de polera"
    },

    {
      divClase:
        formulario.carnet_identidad === 0 ? "invisible" : "itemContainer",
      Etiqueta: "Carnet de identidad",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "CarnetDeIdentidad",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos: "Debes selecionar una talla de polera"
    },

    {
      divClase:
        formulario.codigo_sis_o_institucion === 0
          ? "invisible"
          : "itemContainer",
      Etiqueta: "Codigo SIS o institución",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "text",
      Identificador: "CodigoSisInst",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
      Requisitos: "Debes selecionar una talla de polera"
    },

    {
      divClase: formulario.semestre === 0 ? "invisible" : "itemContainer",
      Etiqueta: "Semestre",
      TipoDeEtiqueta: "FormLabel",
      TipoDeEntrada: "select",
      Identificador: "Semestre",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un semestre" },
        { Valor: "1", Etiqueta: "1" },
        { Valor: "2", Etiqueta: "2" },
        { Valor: "3", Etiqueta: "3" },
        { Valor: "4", Etiqueta: "4" },
        { Valor: "5", Etiqueta: "5" },
        { Valor: "6", Etiqueta: "6" },
        { Valor: "7", Etiqueta: "7" },
        { Valor: "8", Etiqueta: "8" },
        { Valor: "9", Etiqueta: "9" },
        { Valor: "10", Etiqueta: "10" },
        { Valor: "11", Etiqueta: "11" },
        { Valor: "12", Etiqueta: "12" },
      ],
      Requisitos: "Debes selecionar una talla de polera"
    },
  ];

  const [formData, setFormData] = useState({
    Nombres: null,
    Apellidos: null,
    FechaDeNacimiento: null,
    CorreoElectronico: null,
    NumeroDeCelular: null,
    Carrera: null,
    TallaDePolera: null,
    CarnetDeIdentidad: null,
    CodigoSisInst: null,
    Semestre: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const namesValidationRegex = /^[a-zA-Z\sáéíóúÁÉÍÓÚ]+$/;
    const numericValidationRegex = /^[0-9]+/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = [];

    if (
      !formData.Nombres.trim() ||
      !namesValidationRegex.test(formData.Nombres)
    ) {
      errors.push(
        "- El campo Nombre no puede estar vacío y solo debe contener letras y espacios."
      );
    }

    if (
      !formData.Apellidos.trim() ||
      !namesValidationRegex.test(formData.Apellidos)
    ) {
      errors.push(
        "- El campo Apellidos no puede estar vacío y solo debe contener letras y espacios."
      );
    }

    if (
      !formData.CorreoElectronico.trim() ||
      !emailRegex.test(formData.CorreoElectronico)
    ) {
      errors.push(
        "- El campo Correo Electronico no puede estar vacío y debe ser un correo valido."
      );
    }

    if (
      !formData.NumeroDeCelular.trim() ||
      !numericValidationRegex.test(formData.NumeroDeCelular) ||
      formData.NumeroDeCelular.length !== 8 ||
      parseInt(formData.NumeroDeCelular, 10) <= 59999999 ||
      parseInt(formData.NumeroDeCelular, 10) >= 79999999
    ) {
      errors.push("El campo Número de Celular debe contener 8 dígitos.");
    }

    // Si pasa la validación, continúa aquí
    if (errors.length > 0) {
      alert("Errores:\n\n" + errors.join("\n"));
      return;
    } else {
      alert("Los datos son válidos. Puedes enviar el formulario.");
    }
    axios
      .post("http://localhost:8000/api/formularios/participante", {
        nombres: formData.Nombres,
        apellidos: formData.Apellidos,
        fecha_nacimiento: formData.FechaDeNacimiento,
        correo_electronico: formData.CorreoElectronico,
        numero_celular: formData.NumeroDeCelular,
        carrera: formData.Carrera,
        talla_polera: formData.TallaDePolera,
        carnet_identidad: formData.CarnetDeIdentidad,
        codigo_sis_o_institucion: formData.CodigoSisInst,
        semestre: formData.Semestre,
        id_formulario: id,
      })
      .then(function (response) {
        console.log(response);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error.response.data.error);
        alert(error.response.data.error);
      });
  };

  return (
    <Background>
      <Label TipoDeEtiqueta="FormTitle">{evento}</Label>
      <form onSubmit={handleSubmit} id="FormularioParaRegistrarParticipante">
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
