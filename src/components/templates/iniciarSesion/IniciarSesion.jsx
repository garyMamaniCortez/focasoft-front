import IniciarSesionSection from "../../organisms/iniciarSesionSection/IniciarSesionSection";
import "./IniciarSesion.css"

const IniciarSesion = () => {
    

    return(
        <div className="vistaContent w3-right">
            <h1 className="TituloDeSeccion"> Iniciar sesión de administrador </h1>
            <div className="SeccionDatosSesion">  
                <IniciarSesionSection/>
            </div>
        </div>
    );
}
export default IniciarSesion;