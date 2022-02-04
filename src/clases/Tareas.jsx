export default class Tareas {
  constructor() {
    this.idTarea = 1;
    this.tareas = [];
  }

  addTarea(tarea) {
    let obj = {
      id: this.idTarea,
      ...tarea,
    };
    this.tareas.push(obj);
    this.idTarea++;
  }

  eliminarTarea = (id) => {
    let index = this.tareas.findIndex((tarea) => tarea.id == id);
    this.tareas.splice(index, 1);
  };

  modificarTarea = (id, status) => {
    let index = this.tareas.findIndex((tarea) => tarea.id == id);
    this.tareas[index][status] = status;
  };
}
