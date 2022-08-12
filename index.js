const argv = require("./config/yargs");
const { multiplicar } = require("./helpers/multiplicar");
const { saveFileTwo } = require("./helpers/saveFiles");
// const argv = require("yargs").argv;

console.clear();

// recibir argumentos por consola , forma 1
// get base from progress.argv
// node index.js --base=x :: send parameters by console
// const [, , arg3 = "base=57"] = process.argv;
// const [name, base] = arg3.split("=");

let result = "";
const path = `./outputs/tabla-${argv.b}.txt`;

result = multiplicar(argv.b, argv.l, argv.h);
saveFileTwo(path, result);
// console.log(process.argv);
