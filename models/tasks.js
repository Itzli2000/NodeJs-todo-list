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

  loadTasksFromDB(data) {
    const convertedData = {};
    data.forEach((task) => (convertedData[task.id] = task));
    this._list = convertedData;
  }

  createTask(description = "") {
    const task = new Task(description);
    this._list[task.id] = task;
  }
}

export { Tasks };
