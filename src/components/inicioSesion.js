import React, { useState } from 'react';
import Swal from 'sweetalert2';

const InicioSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInicioSesion = (e) => {
    e.preventDefault();

    // Obtener los usuarios almacenados en localStorage
    const usuariosStorage = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Buscar el usuario con el correo electrónico ingresado
    const usuario = usuariosStorage.find(user => user.email === email);

    // Verificar si se encontró un usuario con el correo electrónico ingresado y si la contraseña coincide
    if (usuario && usuario.password === password) {
      // Iniciar sesión exitosamente
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso!',
        text: `Bienvenido, ${usuario.nombre}!`,
      });
      // Puedes redirigir al usuario a otra página o realizar alguna acción adicional
    } else {
      // Mostrar mensaje de error si las credenciales son incorrectas
      Swal.fire({
        icon: 'error',
        title: 'Error de inicio de sesión',
        text: 'Las credenciales ingresadas son incorrectas. Por favor, inténtalo de nuevo.',
      });
    }

    // Limpiar campos de entrada
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleInicioSesion}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default InicioSesion;
