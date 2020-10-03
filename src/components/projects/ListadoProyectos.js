import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
  //Extraer proyectos del state iniciar "ProyectosState"
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  //obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
  }, []);

  //Revisar si proyectos tiene contenido

  if (proyectos.length === 0)
    return (
      <p>
        No tienes proyectos, comienza creando uno{" "}
        <span role="img" aria-label="Smily face">
          &#128515;
        </span>
      </p>
    );

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
