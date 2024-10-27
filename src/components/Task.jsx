// Task.jsx
import React from "react";
import { useReducer, useRef } from "react";

const Task = () => {
  const inputRefTitle = useRef();
  const inputRefDescription = useRef();

  const [tasks, dispatch] = useReducer((state = [], action) => {
    switch (action.type) {
      case "add_task": {
        return [
          ...state,
          {
            id: state.length,
            title: action.title,
            description: action.description
          }
        ]}
        case "remove_task": {
          return state.filter((task, index) => index != action.index);
        }
      default: {
        return state;
      }
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "add_task",
      title: inputRefTitle.current.value,
      description: inputRefDescription.current.value,
    });
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleSubmit}>
        <label>Tarea</label>
        <input type="text" name="title" ref={inputRefTitle} />
        <input type="text" name="description" ref={inputRefDescription} />
        <input type="submit" value="AGREGAR" />
      </form>
      <div className="tasks">
        {tasks &&
          tasks.map((task, index) => (
            <div className="task" key={index}>
              <p>
                <h1>{task.title}</h1>
                {task.description}
              </p>
              <button
                onClick={
                  (() => 
                  dispatch({ type: "remove_task", index }))
                } 
              >
                BORRAR
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Task;
