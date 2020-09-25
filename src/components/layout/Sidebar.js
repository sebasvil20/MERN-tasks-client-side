import React from "react";
import NuevoProyecto from "../projects/NuevoProyecto";
import ListadoProyectos from "../projects/ListadoProyectos";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
        <NuevoProyecto />
      </h1>
      <div className="proyectos">
        <h2>Tus proyetos</h2>
        <ListadoProyectos />
      </div>
    </aside>
  );
};

export default Sidebar;
