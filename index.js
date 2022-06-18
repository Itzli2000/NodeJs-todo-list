require("colors");
const { showMenu, pause } = require("./helper/messages");

const main = async () => {
  console.clear();
  let opt = "";
  do {
    opt = await showMenu();
    console.log("main opt: ", opt);
    await pause();
  } while (opt !== "0");
};

main();
