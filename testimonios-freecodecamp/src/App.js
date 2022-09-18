import logo from './logo.svg';
import './App.css';
import {Testimonio} from "./componentes/Testimonios";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que nuestros alumnos dicen de Free Code Camp</h1>
        <Testimonio/>
      </div>
    </div>
  );
}

export default App;
