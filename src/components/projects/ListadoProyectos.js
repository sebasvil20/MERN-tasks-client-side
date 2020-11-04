import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from "../../context/autenticacion/authContext";

const ListadoProyectos = () => {
  //Extraer proyectos del state iniciar "ProyectosState"
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos, mensaje } = proyectosContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  //Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const { autenticado, usuarioAutenticado } = authContext;

  //obtener proyectos cuando carga el componente
  useEffect(() => {
    usuarioAutenticado();
    //Mostrar alerta si hay algun error
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }

    obtenerProyectos();
    // eslint-disable-next-line
  }, [mensaje]);

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
      {alerta && autenticado ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto._id} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
