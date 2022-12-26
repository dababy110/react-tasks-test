import { useState, useEffect, createContext, useContext } from "react"; //Es una funcion que nos proporciona react
import { tasks as data } from "../data/Tasks";

export const TaskContext = createContext(); //TaskContext es el nombre del contexto

export function TaskContextProvider(props) {
  //TaskContextProvider es el que va a englobar a todos los componentes

  const [tasks, setTasks] = useState([]);

  function createTasks(task) {
    setTasks([
      ...tasks, //Los tres puntos decimos que copie todos los elementos de ese arreglo
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    //Utilizamos esete useEffect para decirle que cuando se ejecute le devuelva nuestra lista de tareas a la funcion
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTasks,
      }}
    >
      {/*Aqui creamos el componente que va a englobar a todos*/}
      {props.children}
    </TaskContext.Provider>
  );
}
