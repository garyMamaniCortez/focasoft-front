import { Route, useNavigate, useParams } from "react-router-dom";
import Background from "../../atoms/background/Background";
import Label from "../../atoms/label/Label";
import Boton from "../../atoms/boton/Boton.jsx";
import Formulario from "../../molecules/formulario/Formulario.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Usuario from "./../../icons/usuario.png";
import "./IniciarSesionSection.css";
import { useAppContext } from '../../../Context';


const IniciarSesionSection = () => {
    const { setDatos } = useAppContext();
    const navigate = useNavigate()

    const{sesion}= useParams();
    console.log(sesion)
 
    const CamposDeEntrada =[
        {divClase:"itemContainer", TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'User',
    Identificador:"Usuario",  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]},
    {divClase:"itemContainer", TipoDeEtiqueta: 'FormLabel', TipoDeEntrada: 'password', 
    Identificador:"Contrasena",  Desactivado: false,
    OpcionesDelDesplegable: [{Valor:"Sin Seleccionar", Etiqueta: "Seleccionar un tipo" }]}
    ];

    const [deviceType, setDeviceType] = useState('');

    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
            setDeviceType('movil');
        } else if (/iPad|tablet|playbook|silk/i.test(userAgent)) {
            setDeviceType('tableta');
        } else {
            setDeviceType('computadora');
        }
    }, []);

    const [formData, setFormData] = useState(
        {
            email: null,
            password: null
        }
    )

    const handleChange = (sesion) => {
        const {name, value} = sesion.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        
    };        

    const handleSubmit = (sesion) => {
        sesion.preventDefault();
        console.log(formData);
        axios.post("http://localhost:8000/api/login", {
            email: formData.Usuario,
            password: formData.Contrasena,
            device_name: deviceType
        },
        {
            headers: {
                'Accept': 'application/json'
            }
        }
        ).then(function (response) {
            console.log(response)
            localStorage.setItem('token', response.data.token)
            navigate('/admin')
            setDatos(prevState => ({
                ...prevState,
                activado: true
              }));
        }).catch(function(error) {
                console.log(error);
                alert(error.response.data.error);  
        })

    };

    return(
        <div>
        <Background Tipo="FondoSesion">
            <img className="Imgsesion" src={Usuario} alt="Imagen de inicio de sesion"/>  
            <Label TipoDeEtiqueta="FormTitle">{sesion}</Label>
                <form onSubmit={handleSubmit} id="FormularioParaInicioDeSesion">
                    <Formulario CamposDeEntrada= {CamposDeEntrada}  handleChange = {handleChange} Desactivado={false} FormData={formData}/>
                    <div className="w3-row w3-center">
                    <Boton TipoDeBoton="submit" ClaseDeBoton="botonRojoGrand" form="FormularioParaInicioDeSesion">Iniciar sesion</Boton>
                    </div>
                </form>
        </Background>
        </div>
    );
}
export default IniciarSesionSection;