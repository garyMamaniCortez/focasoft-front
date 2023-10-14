import CreateFormRegister from "../../molecules/createFormRegister/CreateFormRegister";
import Background from "../../atoms/background/Background";

const CreateFormRegisterSec = ({campos}) => {

  return (
    <Background>
      <CreateFormRegister campos= {campos}/>
    </Background>
  );
}

export default CreateFormRegisterSec;