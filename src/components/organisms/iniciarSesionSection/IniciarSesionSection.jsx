import { Route, useNavigate, useParams } from "react-router-dom";
import Background from "../../atoms/background/Background";
import Label from "../../atoms/label/Label";
import Boton from "../../atoms/boton/Boton.jsx";
import Formulario from "../../molecules/formulario/Formulario.jsx";
import { useEffect, useState } from "react";
import Usuario from "./../../icons/usuario.png";
import "./IniciarSesionSection.css";
import { useAppContext } from "../../../Context";
import axiosInterceptorInstance from "../../../axios/interceptor.js";
import { ENDPOINTS } from "../../../Constants/endpoinst.js";

const IniciarSesionSection = () => {
  const { setDatos } = useAppContext();
  const navigate = useNavigate();

  const { sesion } = useParams();
  console.log(sesion);

  const CamposDeEntrada = [
    {
      TipoDeEntrada: "User",
      Identificador: "Usuario",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
    },
    {
      TipoDeEntrada: "password",
      Identificador: "Contrasena",
      Desactivado: false,
      OpcionesDelDesplegable: [
        { Valor: "Sin Seleccionar", Etiqueta: "Seleccionar un tipo" },
      ],
    },
  ];

  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    ) {
      setDeviceType("movil");
    } else if (/iPad|tablet|playbook|silk/i.test(userAgent)) {
      setDeviceType("tableta");
    } else {
      setDeviceType("computadora");
    }
  }, []);

  const [formData, setFormData] = useState({
    email: null,
    password: null,
  });

  const handleChange = (sesion) => {
    const { name, value } = sesion.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (sesion) => {
    sesion.preventDefault();
    console.log(formData);
    axiosInterceptorInstance
      .post(
        ENDPOINTS.login,
        {
          email: formData.Usuario,
          password: formData.Contrasena,
          device_name: deviceType,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        navigate("/admin");
        setDatos((prevState) => ({
          ...prevState,
          activado: true,
        }));
      })
      .catch(function (error) {
        console.log(error);
        alert(error.response.data.error);
      });
  };

  return (
    <div>
      <Background Tipo="FondoSesion">
        <img
          className="Imgsesion"
          src={Usuario}
          alt="Imagen de inicio de sesion"
        />
        <Label TipoDeEtiqueta="FormTitle">{sesion}</Label>
        <div className="CentrarContenido">
        <form onSubmit={handleSubmit} id="FormularioParaInicioDeSesion">
          <Formulario
            CamposDeEntrada={CamposDeEntrada}
            handleChange={handleChange}
            Desactivado={false}
            FormData={formData}
          />
          <div className="w3-row w3-center">
            <Boton
              TipoDeBoton="submit"
              ClaseDeBoton="botonRojoGrand"
              form="FormularioParaInicioDeSesion"
            >
              Iniciar sesión
            </Boton>
          </div>
        </form>
        </div>
      </Background>
    </div>
  );
};
export default IniciarSesionSection;
