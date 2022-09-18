import logo from './logo.svg';
import './App.css';
import {Testimonio} from "./componentes/Testimonios";
import { logRoles } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Testimonios de alumnos, Primeros pasos React</h1>
        <Testimonio 
          nombre="Agustin Cruz"
          pais="Argentina"
          imagen="agus"
          cargo="Ingeniero Industrial"
          empresa="Google"
          testimonio={<text>`Lorem ipsum dolor <strong> sit amet</strong> consectetur adipisicing elit. Nobis esse quaerat qui repudiandae illo dolore placeat accusantium eligendi facere? Ipsum vero molestias quo illum dolores assumenda temporibus, veniam molestiae culpa.`</text>} />
        <Testimonio 
          nombre="Gonzalo Blotta"
          pais="Argentina"
          imagen="gonza"
          cargo="Full Stack Developer"
          empresa="XOOR"
          testimonio={<text>`Lorem ipsum <b> dolor sit amet</b> consectetur adipisicing elit. Nobis esse quaerat qui repudiandae illo dolore placeat accusantium eligendi facere? Ipsum vero molestias quo illum dolores assumenda temporibus, veniam molestiae culpa.`</text>} />
        <Testimonio 
          nombre="Maria Fernanda Cruz"
          pais="Argentina"
          imagen="fer"
          cargo="Tatuadora"
          empresa="Waldorf Astoria"
          testimonio={<text>`Lorem ipsum <b>dolor sit amet consectetur adipisicing</b> elit. Nobis esse quaerat qui repudiandae illo dolore placeat accusantium eligendi facere? Ipsum vero molestias quo illum dolores assumenda temporibus, veniam molestiae culpa.`</text>} />
      </div>
    </div>
  );
}

export default App;
