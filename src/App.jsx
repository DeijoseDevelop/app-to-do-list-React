import Tareas from "./clases/Tareas";
import { useState } from "react";

let tareas = new Tareas();

function App() {
  const [allTask, setAllTask] = useState([]);

  function setTasks() {
    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let currentTask = {
      nombre: nombre,
      descripcion: descripcion,
    };
    tareas.addTarea(currentTask);
    setAllTask((_) => [...tareas.tareas]);
  }

  return (
    <div>
      {allTask.map((task, index) => (
        <div key={index}>{task.nombre}</div>
      ))}
      <input type="text" placeholder="nombre" id="nombre" />
      <input type="text" placeholder="Descripcion" id="descripcion" />
      <button onClick={setTasks}>Agregar Tarea</button>
    </div>
  );
}

export default App;
