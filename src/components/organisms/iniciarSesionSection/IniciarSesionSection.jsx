import { useNavigate, useParams } from "react-router-dom";
import Background from "../../atoms/background/Background";
import Label from "../../atoms/label/Label";
import Boton from "../../atoms/boton/Boton.jsx";
import Formulario from "../../molecules/formulario/Formulario.jsx";
// import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios"
// import { useNavigate } from "react-router-dom";
import usuario from "./../../icons/usuario.png";
import "./IniciarSesionSection.css";

const IniciarSesionSection = () => {
    const navigate = useNavigate()
    
    const{ id, sesion}= useParams();
    console.log(sesion)

    const [formulario, setFormulario] = useState([{}]);
    
    useEffect(()=>{
        getAllForms()
    },[])

    const getAllForms = async () => {
        const response = await axios.get("http://localhost:8000/api/formularios/registro/"+id)
        setFormulario(response.data)
    }  
    
    const CamposDeEntrada =[
        {divClase:"itemContainer", TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'User',
    Identificador:"Usuario",  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    {divClase:"itemContainer", TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'password', 
    Identificador:"Contrasena",  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]}
    ];

    const [formData, setFormData] = useState(
        {
            Usuario: null,
            Contraseña:null
        }
    )

    const handleChange = (sesion) => {
        const { name, value} = sesion.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        

        axios.post("" ,{
            usuario: formData.usuario,
            contrasena: formData.contrasena
        }).then(function (response) {
            console.log(response);
            navigate('/')
        })
            .catch(function (error) {
            console.log(error.response.data.error);
            alert(error.response.data.error);      
        });
    };

    return(
        <div>
        <Background tamback="backgroundpeq">
            <img className="Imgsesion" src={usuario} alt="Imagen de inicio de sesion"/>  
            <Label TipoDeEtiqueta="FormTitle">{sesion}</Label>
                <form onSubmit={handleSubmit} id="FormularioParaInicioDeSesion">
                    <Formulario CamposDeEntrada= {CamposDeEntrada}  handleChange = {handleChange}/>
                    <div className="w3-row w3-center">
                    <Boton TipoDeBoton="submit" ClaseDeBoton="botonRojoGrand" form="FormularioParaInicioDeSesion">Iniciar sesion</Boton>
                    </div>
                </form>
        </Background>
        </div>
    );
}
export default IniciarSesionSection;