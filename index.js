// import { showMenu, pause } from "./helper/messages.js";
import colors from "colors";
import { inquirerMenu, pause, readInput } from "./helper/inquirer.js";
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
    }

    saveDB(tasks.listTasks);

    if (option !== "7") await pause();
  } while (option !== "7");
};

main();
