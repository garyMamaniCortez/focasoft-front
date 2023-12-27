import Texto from "../../atoms/conjuntoTexto/Texto";
import Afiche from "../../atoms/afiche/Afiche";
import Boton from "../../atoms/boton/Boton";
import "./card.css"
import { Link } from "react-router-dom";
function Card(props){
    let idFormulario= "/RegistrarParticipante/"+props.idFormulario+"/"+props.title;
    let idEvento="/EditarEvento/"+props.idEvento
    return(
        <div className="cardContent">
            <div className={props.aficheDiv}>
            <Afiche 
            Class={props.Class}
            src={props.src}
            ></Afiche>
            </div>
            <Texto 
            category={props.category} 
            url={props.url}
            title={props.title} 
            date={props.date} 
            description={props.description}
            ></Texto>
            
            <div className={props.claseDiv} >
                
                <Link to={idFormulario}>
                    <Boton ClaseDeBoton={"botonRojoGrand"} TipoDeBoton={"button"}>Registrarse</Boton>
                </Link>
    </div>

        </div>
    )
}
export default Card;