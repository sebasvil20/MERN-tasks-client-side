import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const FormTarea = () => {
  //Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //Si no hay proyecto seleccionado
  if (!proyecto) return null;
  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const onSubmit = (e) => {
    e.preventDefault();

    // validar

    //pasar la validacion

    // agregar nueva tarea al state de tareas

    // reiniciar el form
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre tarea..."
            name="nombre"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block btn-submit"
            value="Agregar tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
