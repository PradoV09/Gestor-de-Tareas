// Menu.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Task from "./Task"; // Asegúrate de que la ruta sea correcta
import Profile from "./Profile";
import LogOut from "./LogOut";
import "./styles/Menu.css"; // Importa el archivo CSS

const Menu = () => {
  return (
    <div className="container">
      <nav className="sidebar">
        <Profile />
        <div className="menu">
          <ul>
            <li>
              <Link to="/Menu/Tareas">Tareas</Link>
            </li>
            <li>
              <Link to="/Menu/Notas">Notas</Link>
            </li>
            <li>
              <Link to="/Menu/Recordatorios">Recordatorios</Link>
            </li>
            <li>
              <Link to="/Menu/Calendario">Calendario</Link>
            </li>
          </ul>
        </div>
        <LogOut />
      </nav>
      <main className="main-content">
        <Routes>
          <Route path="Tareas" element={<Task />} />
          {/* Agrega rutas adicionales aquí para Notas, Recordatorios y Calendario */}
        </Routes>
      </main>
    </div>
  );
};

export default Menu;