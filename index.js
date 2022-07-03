// import { showMenu, pause } from "./helper/messages.js";
import colors from "colors";
import {
  inquirerMenu,
  pause,
  readInput,
  listOfTaskToDelete,
  confirmTaskDeletion,
  listOfTaskToComplete,
  confirmTaskComplete,
} from "./helper/inquirer.js";
import { saveDB, retrieveDB } from "./helper/saveFile.js";
import { Tasks } from "./models/tasks.js";

const main = async () => {
  console.clear();
  let option = "";
  const tasks = new Tasks();
  const dbTasks = retrieveDB();

  if (dbTasks) tasks.loadTasksFromDB(dbTasks);

  do {
    option = await inquirerMenu();

    switch (option) {
      case "1":
        const description = await readInput("Description:");
        tasks.createTask(description);
        break;

      case "2":
        tasks.fullList();
        break;

      case "3":
        tasks.listTaskByStatus();
        break;

      case "4":
        tasks.listTaskByStatus(false);
        break;

      case "5":
        const toComplete = await listOfTaskToComplete(tasks.listTasks);
        const confirm = await confirmTaskComplete();
        if (confirm) tasks.completeTasks(toComplete);
        break;

      case "6":
        const id = await listOfTaskToDelete(tasks.listTasks);
        const task = tasks.getTaskByID(id);
        const confirmation = await confirmTaskDeletion(task.description);
        if (confirmation) tasks.deleteTask(id);
        break;
    }

    saveDB(tasks.listTasks);

    if (option !== "7") await pause();
  } while (option !== "7");
};

main();
