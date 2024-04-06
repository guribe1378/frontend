import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ConsultaActividadesPorFecha = () => {
  const [fechaConsulta, setFechaConsulta] = useState('');
  const [actividadesFiltradas, setActividadesFiltradas] = useState([]);

  // Función para realizar la consulta de actividades por fecha
  const realizarConsulta = (fecha) => {
    // Obtener todas las actividades almacenadas en localStorage
    const actividadesStorage = JSON.parse(localStorage.getItem('actividades')) || [];
    
    // Filtrar las actividades por fecha
    const actividadesFiltradasPorFecha = actividadesStorage.filter(actividad => {
      // Convertir la fecha de la actividad a formato de fecha
      const fechaActividad = new Date(actividad.fecha);
      // Convertir la fecha de consulta a formato de fecha
      const fechaConsultaDate = new Date(fecha);
      // Comparar las fechas
      return fechaActividad.toDateString() === fechaConsultaDate.toDateString();
    });

    // Establecer las actividades filtradas en el estado
    setActividadesFiltradas(actividadesFiltradasPorFecha);

    // Mostrar mensaje si no se encuentran actividades
    if (actividadesFiltradasPorFecha.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'No hay actividades',
        text: 'No se encontraron actividades para la fecha seleccionada.',
      });
    }
  };

  // Función para manejar el cambio de la fecha seleccionada
  const handleChangeFecha = (e) => {
    const fechaSeleccionada = e.target.value;
    setFechaConsulta(fechaSeleccionada);
    // Realizar la consulta cuando se selecciona una fecha
    realizarConsulta(fechaSeleccionada);
  };

  return (
    <div className="container">
      <h2>Consulta de actividades por fecha</h2>
      <div className="form-group">
        <label>Selecciona una fecha:</label>
        <input
          type="date"
          className="form-control"
          value={fechaConsulta}
          onChange={handleChangeFecha}
        />
      </div>
      <ul className="list-group">
        {actividadesFiltradas.map((actividad, index) => (
          <li key={index} className="list-group-item">
            <strong>Descripción:</strong> {actividad.descripcion}
            <br />
            <strong>Fecha:</strong> {actividad.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultaActividadesPorFecha;
