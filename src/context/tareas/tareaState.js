import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

import { TAREAS_PROYECTO } from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir pagos", estado: false, proyectoId: 2 },
      { nombre: "Elegir hosting", estado: true, proyectoId: 3 },
      { nombre: "Elegir thicc", estado: true, proyectoId: 4 },
      { nombre: "Elegir plataforma", estado: true, proyectoId: 2 },
      { nombre: "Elegir pagos", estado: false, proyectoId: 1 },
      { nombre: "Elegir hosting", estado: true, proyectoId: 4 },
      { nombre: "Elegir thicc", estado: true, proyectoId: 2 },
      { nombre: "Elegir plataforma", estado: true, proyectoId: 3 },
      { nombre: "Elegir pagos", estado: false, proyectoId: 4 },
      { nombre: "Elegir hosting", estado: true, proyectoId: 2 },
      { nombre: "Elegir thicc", estado: true, proyectoId: 1 },
    ],
    tareasproyecto: null,
  };

  // Crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  // Crear las funciones

  // Obtener las tareas de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        obtenerTareas,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
