const colors = require("colors");

const multiplicar = (base, list, hasta) => {
  console.log("------------------------------------------".green);
  console.log(
    `---------------${"tabla del".red} ${colors.blue(base)}----------------`
  );

  let result,
    resultConsole = "";
  for (let i = 1; i <= hasta; i++) {
    result += `${colors.yellow(base)} ${"x".blue} ${i} = ${base * i} \n`;
    resultConsole += `${base} ${"x"} ${i} = ${base * i} \n`;
  }

  if (list) console.log(result);
  return result;
};

module.exports = {
  multiplicar,
};
