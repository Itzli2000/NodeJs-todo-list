import colors from "colors";

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("====================".green);
    console.log("  Select an option  ".green);
    console.log("====================\n".green);
    console.log(`${"1.".green} Create task`);
    console.log(`${"2.".green} List tasks`);
    console.log(`${"3.".green} list completed tasks`);
    console.log(`${"4.".green} List pending tasks`);
    console.log(`${"5.".green} Complete task`);
    console.log(`${"6.".green} Delete task`);
    console.log(`${"0.".green} Exit\n`);
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Select an option: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`Press ${"Enter".green} to continue\n`, () => {
      readline.close();
      resolve();
    });
  });
};

export { showMenu, pause };
