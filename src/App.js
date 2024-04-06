
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import RegistroUsuario from './components/registroUsuario';
import ActividadesList from './components/actividadesList';
import ActividadForm from './components/actividadForm';
import UsuariosList from './components/usuariosList';
const actividades = []; // Define el array de actividades



function App() {
  <ActividadesList actividades={actividades} /> 

  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/actividadForm" element={<ActividadForm/>}/>
        <Route path="/registroUsuario" element={<RegistroUsuario/>}/>
        <Route path="/actividadesList" element={<ActividadesList/>}/>
        <Route path="/usuariosList" element={<UsuariosList/>} />
      </Routes>
      </BrowserRouter>      
    </div>
  );
}
export default App;
