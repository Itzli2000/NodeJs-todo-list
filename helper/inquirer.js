import inquirer from "inquirer";
import colors from "colors";

const questions = [
  {
    type: "list",
    name: "option",
    message: "What do you want to do?",
    choices: [
      {
        value: "1",
        name: "1. Create task",
      },
      {
        value: "2",
        name: "2. List tasks",
      },
      {
        value: "3",
        name: "3. list completed tasks",
      },
      {
        value: "4",
        name: "4. List pending tasks",
      },
      {
        value: "5",
        name: "5. Complete task",
      },
      {
        value: "6",
        name: "6. Delete task",
      },
      {
        value: "0",
        name: "0. Exit\n",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("====================".green);
  console.log("  Select an option  ".green);
  console.log("====================\n".green);

  const { option } = await inquirer.prompt(questions);

  return option;
};

const pause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Press ${"Enter".green} to continue`,
    },
  ];
  console.log('\n')
  await inquirer.prompt(question);
};

export { inquirerMenu, pause };