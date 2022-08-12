const fs = require("fs");
const colors = require("colors");

const saveFile = async (path, fileName) => {
  fs.writeFile(path, fileName, (err) => {
    if (err) throw new Error(err);
  });
};

const saveFileTwo = (path, fileName) => {
  fs.writeFileSync(path, fileName);
};

module.exports = {
  saveFile,
  saveFileTwo,
};
