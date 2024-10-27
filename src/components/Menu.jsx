// Menu.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Task from "./Task"; // Asegúrate de que la ruta sea correcta
import Profile from "./Profile";
import LogOut from "./LogOut";

const Menu = () => {
  return (
    <div>
      <nav>
        <Profile />
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
      </nav>
      <Routes>
        <Route path="Tareas" element={<Task />} />
      </Routes>
      <LogOut />
    </div>
  );
};

export default Menu;
