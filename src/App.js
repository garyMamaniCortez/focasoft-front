import CreateEventForm from "./components/molecules/createEvent/CreateEventForm";

const campos = [
  { etiqueta: 'TItulo del evento', LabelType: 'FormLabel', InputType: 'text', Select: false },
  { etiqueta: 'Fecha del evento', LabelType: 'FormLabel', InputType: 'date', Select: false  },
  { etiqueta: 'Tipo del evento', LabelType: 'FormLabel', InputType: 'text', Select: true  },
  { etiqueta: 'Descripcion', LabelType: 'FormLabel', InputType: 'description', Select: false  },
  { etiqueta: 'Afiche del evento', LabelType: 'FormLabel', InputType: 'text', Select: false  },
  { etiqueta: 'Requsitos', LabelType: 'FormLabel', InputType: 'text', Select: false  },
  { etiqueta: 'Premios', LabelType: 'FormLabel', InputType: 'text'  },
  { etiqueta: 'Patrocinadores', LabelType: 'FormLabel', InputType: 'text', Select: false  },
  { etiqueta: 'Contactos', LabelType: 'FormLabel', InputType: 'text', Select: 'false'},
];

function App() {

  return (
    <div>
      <CreateEventForm campos= {campos}/>
    </div>
  );
}

export default App;
