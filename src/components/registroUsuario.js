// src/components/RegistroUsuario.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const RegistroUsuario = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
  });

  const handleRegistroUsuario = (e) => {
    e.preventDefault();

    // Verificar campos vacíos
    if (usuario.nombre.trim() === '' || usuario.email.trim() === '' || usuario.password.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Campos Vacíos',
        text: 'Por favor completa todos los campos.',
      });
      return;
    }

    try {
      // Obtener los usuarios almacenados en localStorage
      const usuariosStorage = JSON.parse(localStorage.getItem('usuarios')) || [];

      // Agregar el nuevo usuario a la lista
      usuariosStorage.push(usuario);

      // Guardar la lista actualizada de usuarios en localStorage
      localStorage.setItem('usuarios', JSON.stringify(usuariosStorage));

      // Mostrar mensaje de confirmación al usuario
      Swal.fire({
        icon: 'success',
        title: 'Usuario registrado!',
        text: 'El usuario se ha registrado exitosamente.',
      });

      // Limpiar los campos del formulario después de registrar el usuario
      setUsuario({
        nombre: '',
        email: '',
        password: '',
      });
    } catch (error) {
      // Manejar errores
      console.error('Error al registrar el usuario:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ha ocurrido un error al registrar el usuario. Por favor, inténtalo de nuevo.',
      });
    }
  };

  return (
    <div className="container">
      <h2>Registro de usuarios</h2>
      <form onSubmit={handleRegistroUsuario}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            className="form-control"
            value={usuario.nombre}
            onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={usuario.email}
            onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={usuario.password}
            onChange={(e) => setUsuario({ ...usuario, password: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar Usuario
        </button>
      </form>
    </div>
  );
};

export default RegistroUsuario;
