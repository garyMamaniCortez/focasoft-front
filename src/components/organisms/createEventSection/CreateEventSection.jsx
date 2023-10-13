import CreateEventForm from "../../molecules/createEvent/CreateEventForm.jsx"

const CreateEventSection = ({campos}) => {

  return (
    <div>
      <CreateEventForm campos= {campos}/>
    </div>
  );
}

export default CreateEventSection;