// import { showMenu, pause } from "./helper/messages.js";
import colors from "colors";
import { inquirerMenu, pause } from "./helper/inquirer.js";

const main = async () => {
  console.clear();
  let opt = "";
  do {
    opt = await inquirerMenu();
    console.log({opt});
    if (opt !== "0") await pause();
  } while (opt !== "0");
};

main();
