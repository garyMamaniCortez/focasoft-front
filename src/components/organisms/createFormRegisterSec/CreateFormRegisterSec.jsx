import { useState } from "react";

import Background from "../../atoms/background/Background";
import Boton from "../../atoms/boton/Boton";
import Formulario from "../../molecules/formulario/Formulario";

import TextInput from "../../atoms/textInput/TextInput";
import Label from "../../atoms/label/Label";
import { useNavigate } from "react-router-dom";

const CreateFormRegisterSec = () => {

const navigate = useNavigate()

  const [CamposDeEntrada, setCamposDeEntrada] = useState([
    { Etiqueta: 'Nombres', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text',
    Identificador:"Nombres", Desactivado: true,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    { Etiqueta: 'Apellidos', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text',
    Identificador:"Apellidos", Desactivado: true,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    { Etiqueta: 'Fecha de nacimiento', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'date',
    Identificador:"FechaDenacimiento", Desactivado: true,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    { Etiqueta: 'Correo electronico', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text',
    Identificador:"CorreoElectronico", Desactivado: true,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    { Etiqueta: 'Numero de Celular', TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'text', 
    Identificador:"NumeroDeCelular", Desactivado: true,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
])

const [formData, setFormData] = useState({Carrera: 0,TallaDePolera: 0, CarnetDeIdentidad: 0
, CodigoSISOInstitucion: 0,Semestre: 0});



const [auxFormData, setAuxFormData] = useState("");

const handleChange = (event) => {
  const { value } = event.target;
  setAuxFormData(() => (value));
};

const handleSubmit = (event) => {
  event.preventDefault();
};

const AgregarCampo = () => {
  if (auxFormData !== "") {
    setFormData((prevFormData) => ({ ...prevFormData, [auxFormData]: 1 }));

    if (auxFormData !== "" && !CamposDeEntrada.some(item => item.Identificador === auxFormData)) {
      setCamposDeEntrada((prevFormData) => ([
        ...prevFormData,
        {
          Etiqueta: auxFormData === "TallaDePolera" ? "Talla De Polera" :
            auxFormData === "CodigoSISOInstitucion" ? "Codigo SIS o\nInstitucion" : 
            auxFormData === "CarnetDeIdentidad" ? "Carnet De Identidad" : 
            auxFormData,
          TipoDeEtiqueta: 'FormLabel',
          TipoDeEntrada: 'text',
          Identificador: auxFormData,
          Desactivado: true,
          OpcionesDelDesplegable: [{ Valor: 'Sin Seleccionar', Etiqueta: 'Seleccionar un tipo' }],
        }
      ]));
    }
    console.log(formData)
  }

  
};

const goBack = () => {
  navigate(-1)
};

  return (
    <Background>
      <form onSubmit={handleSubmit}>
        <Formulario CamposDeEntrada= {CamposDeEntrada} handleSubmit={handleChange}
        Desactivado={true}/>
        <div className='itemContainer'>
                    <Label TipoDeEtiqueta="FormLabel">Añadir Campo</Label>
                    <TextInput TipoDeEntrada="select" Identificador="AñadirCampo"
                    ManejarCambio={handleChange}  Desactivado={false}
                     OpcionesDelDesplegable={[
                      {Valor:"", Etiqueta: "Selecciona un campo" },
                      {Valor:"Carrera", Etiqueta: "Carrera" },
                      {Valor:"TallaDePolera", Etiqueta: "Talla De Polera" },
                      {Valor:"CarnetDeIdentidad", Etiqueta: "Carnet De Identidad" },
                      {Valor:"CodigoSISOInstitucion", Etiqueta: "Codigo SIS o Institucion" },
                      {Valor:"Semestre", Etiqueta: "Semestre" }
                    ]}/>
                </div>
        <div className="w3-center w3-margin">
          <Boton ClaseDeBoton="botonAzul" TipoDeBoton="button" f={AgregarCampo} >Añadir Pregunta</Boton>
        </div>
        <div className="w3-row w3-center">             
          <div className="createEventButton w3-col l6">
          <Boton ClaseDeBoton="botonAmarilloGrand"  TipoDeBoton="submit">Guardar Informacion</Boton>
          </div>
          <div className="w3-col l6">
            <Boton ClaseDeBoton="botonRojoGrand">Cancelar</Boton>
          </div>
        </div>
      </form>
    </Background>
  );
}

export default CreateFormRegisterSec;