import Texto from "../../atoms/conjuntoTexto/Texto";
import Afiche from "../../atoms/afiche/Afiche";
import "./card.css"
function Card(props){
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
        </div>
    )
}
export default Card;