import TaskCards from "./TaskCards";
import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    //Le decimos que si no tiene elementos el useState que nos retorne ese h1
    return (
      <h1 className="text-white text-4xl font-bold text-left">
        No hay tareas
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCards key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
