import React, { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTasks } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault(); //Esto lo que hace cancela el comportamiento por defecto

    createTasks({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-6">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <br /> <br />
        <textarea
          placeholder="Escribe tu descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 resize-none"
        ></textarea>
        <br /> <br />
        <button className="bg-green-500 px-3 py-1 rounded-md mt-4 text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
