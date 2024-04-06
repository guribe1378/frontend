import React, { useState, useEffect } from 'react';

const ConsultaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Obtener los usuarios almacenados en localStorage cuando el componente se monta
    const usuariosStorage = JSON.parse(localStorage.getItem('usuarios')) || [];
    setUsuarios(usuariosStorage);
  }, []); // El segundo argumento [] asegura que el efecto solo se ejecute una vez, al montar el componente

  return (
    <div className="container">
      <h2>Consulta de usuarios</h2>
      <ul className="list-group">
        {usuarios.map((usuario, index) => (
          <li key={index} className="list-group-item">
            <strong>Nombre:</strong> {usuario.nombre}
            <br />
            <strong>Email:</strong> {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultaUsuarios;
