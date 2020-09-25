import React, { Fragment, useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  //ontenter el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario } = proyectosContext;

  // state para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  //extraer nombre de proyecto
  const { nombre } = proyecto;

  // lee los contenidos del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario submitea el proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //validar el proyecto

    //agregar al state

    //Reiniciar el form
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-block btn-primario btn-submit"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
