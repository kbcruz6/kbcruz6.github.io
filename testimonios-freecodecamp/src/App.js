import logo from './logo.svg';
import './App.css';
import {Testimonio} from "./componentes/Testimonios";
import { logRoles } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Testimonios de alumnos</h1>
        <Testimonio 
          nombre="Agustin Cruz"
          pais="Argentina"
          imagen="agus"
          cargo="Ingeniero Industrial"
          empresa="Google"
          testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse quaerat qui repudiandae illo dolore placeat accusantium eligendi facere? Ipsum vero molestias quo illum dolores assumenda temporibus, veniam molestiae culpa."
        />
        <Testimonio 
          nombre="Gonzalo Blotta"
          pais="Argentina"
          imagen="gonza"
          cargo="Full Stack Developer"
          empresa="XOOR"
          testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse quaerat qui repudiandae illo dolore placeat accusantium eligendi facere? Ipsum vero molestias quo illum dolores assumenda temporibus, veniam molestiae culpa."
        />
        <Testimonio 
          nombre="Maria Fernanda Cruz"
          pais="Argentina"
          imagen="fer"
          cargo="Tatuadora"
          empresa="Waldorf Astoria"
          testimonio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse quaerat qui repudiandae illo dolore placeat accusantium eligendi facere? Ipsum vero molestias quo illum dolores assumenda temporibus, veniam molestiae culpa."
        />
      </div>
    </div>
  );
}

export default App;
