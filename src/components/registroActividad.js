// src/components/RegistroActividad.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const RegistroActividad = () => {
  const [actividad, setActividad] = useState('');
  const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem('usuario')));

  const handleChange = (e) => {
    setActividad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (actividad.trim() === '') {
      Swal.fire('Error', 'Debes ingresar una actividad', 'error');
      return;
    }
    // Aquí podrías enviar la actividad a tu backend asociada al usuario
    Swal.fire('Éxito', 'Actividad registrada correctamente', 'success');
    setActividad('');
  };

  return (
    <div className="container mt-5">
      <h2>Registro de Actividad para {usuario.nombre}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Actividad:</label>
          <input
            type="text"
            className="form-control"
            value={actividad}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar Actividad
        </button>
      </form>
    </div>
  );
};

export default RegistroActividad;
