const { options, boolean } = require("yargs");

// ------------------instlación de paquetes------------------
// recibir argumentos por consola , forma 2
// npm i yargs@version
// node index --base=5 return: { _: [], base: 10, '$0': 'index' }
// node index -b=5 -l=10 return { _: [], b: 10, l: 10, '$0': 'index' }
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "is the base of the multiplication table",
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    demandOption: false,
    default: false,
    describe: "show table",
  })
  .option("h", {
    alias: "to",
    type: "number",
    demandOption: false,
    default: 10,
    describe: "is a limit of multiplication",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) throw "b should an number";
    // if (typeof argv.l !== boolean) throw "l is a boolena";
    return true;
  }).argv;

module.exports = argv;
