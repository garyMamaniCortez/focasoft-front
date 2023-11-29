import Background from "../../atoms/background/Background";
import Label from "../../atoms/label/Label";

const Participante = (props) => {
    return (
<Background Tipo={props.Tipo}>
<Label TipoDeEtiqueta="NombreDeParticipante">{props.Nombres}</Label>
<Label TipoDeEtiqueta="ApellidoDeParticipante">{props.Apellidos}</Label>
<Label TipoDeEtiqueta="CorreoDeParticipante">{props.Correo}</Label>
</Background>
    );
}

export default Participante