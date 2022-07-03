import { Task } from "./task.js";

class Tasks {
  _list = {};

  get listTasks() {
    const listToArray = [];

    Object.keys(this._list).forEach((key) => {
      listToArray.push(this._list[key]);
    });

    return listToArray;
  }

  constructor() {
    this._list = {};
  }

  getTaskByID(taskID) {
    const task = this._list[taskID];
    return task;
  }

  deleteTask(id) {
    if (this._list[id]) {
      console.log(`Task ${this._list[id].description} deleted`);
      delete this._list[id];
    }
  }

  loadTasksFromDB(data) {
    const convertedData = {};
    data.forEach((task) => (convertedData[task.id] = task));
    this._list = convertedData;
  }

  createTask(description = "") {
    const task = new Task(description);
    this._list[task.id] = task;
  }

  fullList() {
    this.listTasks.forEach((task, index) =>
      console.log(
        `${(index + 1 + ".").green} ${task.description} :: ${
          task.completedOn !== null ? task.completedOn.green : "Pending".red
        }`
      )
    );
  }

  listTaskByStatus(status = true) {
    this.listTasks.forEach((task, index) => {
      const taskStatus = task.completedOn !== null ? true : false;
      taskStatus === status &&
        console.log(
          `${(index + 1 + ".").green} ${task.description} :: ${
            task.completedOn !== null ? task.completedOn.green : "Pending".red
          }`
        );
    });
  }

  completeTasks(list) {
    list.forEach((id) =>
      this._list[id].completedOn === null
        ? (this._list[id].completedOn = new Date().toLocaleString())
        : null
    );
    this.listTasks.forEach((task) => {
      if (!list.includes(task.id)) this._list[task.id].completedOn = null;
    });
  }
}

export { Tasks };
