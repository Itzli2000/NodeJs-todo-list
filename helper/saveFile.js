import fs from "fs";

const dir = "./db";
const file = `${dir}/tasks.json`;

const saveDB = (data) => {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
  } catch (error) {
    throw error;
  }
};

const retrieveDB = () => {
  try {
    if (!fs.existsSync(file)) return null;
    const info = fs.readFileSync(file, { encoding: "utf-8" });
    return JSON.parse(info);
  } catch (error) {
    throw error;
  }
};

export { saveDB, retrieveDB };
