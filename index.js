// import { showMenu, pause } from "./helper/messages.js";
import colors from "colors";
import { inquirerMenu, pause, readInput } from "./helper/inquirer.js";
import { Tasks } from "./models/tasks.js";

const main = async () => {
  console.clear();
  let option = "";
  const tasks = new Tasks();
  do {
    option = await inquirerMenu();
    console.log({option});
    
    switch(option) {
      case '1':
        const description = await readInput('Description:');
        tasks.createTask(description);
        break;

      case '2':
        console.log(tasks.listTasks);
        break;
    }
    
    if (option !== "0") await pause();
  } while (option !== "0");
};

main();
