// src/components/ActividadesForm.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ActividadesForm = () => {
  const [actividad, setActividad] = useState('');

  const handleRegistro = (e) => {
    e.preventDefault();

    // Verificar campos vacíos
    if (actividad.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Campo Vacío',
        text: 'Por favor completa la descripción de la actividad.',
      });
      return;
    }

    try {
     // localStorage.clear();
      // Obtener las actividades almacenadas en localStorage
      const actividadesStorage = JSON.parse(localStorage.getItem('actividades')) || [];

      // Crear una nueva actividad
      const nuevaActividad = {
        id: new Date().getTime(), // Generar un identificador único para la actividad
        descripcion: actividad,
        fecha: new Date().toDateString(), // Agregar la fecha actual
      };

      // Actualizar la lista de actividades con la nueva actividad
      const nuevasActividades = [...actividadesStorage, nuevaActividad];

      // Guardar las actividades actualizadas en localStorage
      localStorage.setItem('actividades', JSON.stringify(nuevasActividades));

      // Mostrar mensaje de confirmación al usuario
      Swal.fire({
        icon: 'success',
        title: 'Actividad registrada!',
        text: 'La actividad se ha registrado exitosamente.',
      });

      // Limpiar el campo de actividad después de registrarla
      setActividad('');
    } catch (error) {
      // Manejar errores
      console.error('Error al registrar la actividad:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ha ocurrido un error al registrar la actividad. Por favor, inténtalo de nuevo.',
      });
    }
  };

  return (
    <div className="container">
      <h2>Registro de Actividades Laborales</h2>
      <form onSubmit={handleRegistro}>
        <div className="form-group">
          <label>Descripción de la actividad:</label>
          <input
            type="text"
            className="form-control"
            value={actividad}
            onChange={(e) => setActividad(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar Actividad
        </button>
      </form>
    </div>
  );
};

export default ActividadesForm;
