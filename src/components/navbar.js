import React from 'react'

export default function NavBar() {
    function go_to_home(){
        window.location="/home"
      }
      let go_to_actividades= () => {
        window.location="/actividadForm"
      }    
      let go_to_registrarusuarios= () => {
        window.location="/registroUsuario"
      }
      let go_to_listactividades= () => {
        window.location="/actividadesList"
      }
      let go_to_listausuarios= () => {
        window.location="/usuariosList"
      }
  return (
    
    <nav class="navbar justify-content-center" >
    <ul id="block-barra" class="nav nav-tabs justify-content-center">
        <li id="items-barra" class="nav-item"><button id="btn-barra" class="btn btn-primary" onClick={go_to_home}>Home</button></li>
        <li id="items-barra" class="nav-item"><button id="btn-barra" class="btn btn-primary" onClick={go_to_actividades}>Regsitro de Actividades</button></li>
        <li id="items-barra" class="nav-item"><button id="btn-barra" class="btn btn-primary" onClick={go_to_registrarusuarios}>Regsitro de Usuarios</button></li>
        <li id="items-barra" class="nav-item" ><button id="btn-barra" class="btn btn-primary" onClick={go_to_listactividades}>Lista de Actividades</button></li>      
        <li id="items-barra" class="nav-item"><button id="btn-barra" class="btn btn-primary" onClick={go_to_listausuarios}>Lista de Usuarios</button></li>      
        </ul>
    </nav>
  
  )
}

