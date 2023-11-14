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
            src={props.src}
            ></Afiche>
            </div>
            <Texto 
            category={props.category} 
            title={props.title} 
            date={props.date} 
            description={props.description}
            ></Texto>
            
           {/* <div className={props.botonEditar}>
                <div className="botones w3-row">
                    <div className="w3-col l6 arriba">
                        <Link to={idEvento}>
                        <Boton ClaseDeBoton={"botonRojoPeq"} TipoDeBoton={"button"}>Modificar evento</Boton>
                        </Link>
                    </div>
                    <div className="w3-col l6 arriba">
                        <Link to={"/AgregarFormulario/"+props.idEvento}>
                        <Boton ClaseDeBoton={"botonAmarilloPeq"} TipoDeBoton={"button"}>Agregar formulario</Boton>
                        </Link>
                    </div>
                    <div className="w3-col l6">
                        <Link to="">
                        <Boton ClaseDeBoton={"botonAmarilloPeq"} TipoDeBoton={"button"}>Agregar ganadores</Boton>
                        </Link>
                    </div>
                    <div className="w3-col l6">
                        <Link to="">
                        <Boton ClaseDeBoton={"botonRojoPeq"} TipoDeBoton={"button"}>Reporte</Boton>
                        </Link>
                    </div>
                    
                </div>
    </div>*/}
            
            {/*<div className={props.claseDiv} >
                
                <Link to={idFormulario}>
                    <Boton ClaseDeBoton={"botonRojoGrand"} TipoDeBoton={"button"}>Registrarse</Boton>
                </Link>
    </div>*/}

        </div>
    )
}
export default Card;