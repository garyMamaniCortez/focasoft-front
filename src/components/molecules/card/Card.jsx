import Texto from "../../atoms/conjuntoTexto/Texto";
import Afiche from "../../atoms/afiche/Afiche";
import Boton from "../../atoms/boton/Boton";
import "./card.css"
import { Link } from "react-router-dom";
function Card(props){
    let idFormulario= "/RegistrarParticipante/"+props.idFormulario+"/"+props.title;
    return(
        <div className="cardContent">
            <Texto 
            category={props.category} 
            title={props.title} 
            date={props.date} 
            description={props.description}
            ></Texto>
            <Afiche
            src={props.src}
            ></Afiche>
            <div className={props.claseDiv} >
                <Link to={idFormulario}>
                    <Boton ClaseDeBoton={"botonRojoGrand"} TipoDeBoton={"button"}>Registrarse</Boton>
                </Link>
            </div>

        </div>
    )
}
export default Card;