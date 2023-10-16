import { useState } from "react";

import Background from "../../atoms/background/Background.jsx";
import Boton from "../../atoms/boton/Boton.jsx";
import Label from "../../atoms/label/Label.jsx";
import Formulario from "../../molecules/formulario/Formulario.jsx";

const RegisterParticipantsSec = () => {

  const Evento = "Evento de Programación";
  
  const CamposDeEntrada = [
    { Etiqueta: 'Nombres', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text',
    Identificador:"Nombres",  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    { Etiqueta: 'Apellidos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', 
    Identificador:"Apellidos",  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    { Etiqueta: 'Fecha de nacimiento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'date', 
    Identificador:"FechaDeNacimiento", Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    { Etiqueta: 'Correo electronico', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'email', 
    Identificador:"CorreoElectronico",  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    { Etiqueta: 'Numero de Celular', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text',
    Identificador:"NumeroDeCelular",  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
];

const [formData, setFormData] = useState({Nombres: "",Apellidos: "", 
  FechaDeNacimiento: "", CorreoElectronico: "",NumeroDeCelular: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de campos
    const namesValidationRegex = /^[A-Za-z\s]+$/;
    const numericValidationRegex = /^[0-9]+$/;

    if (!formData.Nombres.trim() || !namesValidationRegex.test(formData.Nombres)) {
      alert("El campo Nombres no puede estar vacío y solo debe contener letras y espacios.");
      return;
    }

    if (!formData.Apellidos.trim() || !namesValidationRegex.test(formData.Apellidos)) {
      alert("El campo Apellidos no puede estar vacío y solo debe contener letras y espacios.");
      return;
    }

    if (
      !formData.NumeroDeCelular.trim() ||
      !numericValidationRegex.test(formData.NumeroDeCelular) ||
      formData.NumeroDeCelular.length !== 8 ||
      parseInt(formData.NumeroDeCelular, 10) <= 59999999 ||
      parseInt(formData.NumeroDeCelular, 10) >= 79999999
    ) {
      alert("El campo Número de Celular debe contener 8 dígitos y estar en el rango válido (mayor a 59999999 y menor a 79999999).");
      return;
    }

    // Si pasa la validación, continúa aquí
    alert("Los datos son válidos. Puedes enviar el formulario.");
  };

  return (
    <Background>
      <Label TipoDeEtiqueta="FormTitle">{Evento}</Label>
      <form onSubmit={handleSubmit}>
        <Formulario CamposDeEntrada= {CamposDeEntrada}  handleChange = {handleChange}/>
        <div className="w3-row w3-center">
        <Boton TipoDeBoton="submit" ClaseDeBoton="botonRojoGrand">Registrarse</Boton>
        </div>
      </form>
    </Background>
  );
}

export default RegisterParticipantsSec;