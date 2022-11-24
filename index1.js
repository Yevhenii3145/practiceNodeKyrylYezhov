const Calc = require('calc-js').Calc;

console.log(process.argv)
// const [ _, __, a, b] = process.argv
const a = process.argv[2]
const b = process.argv[3]

console.log(new Calc(parseFloat(a)).sum(parseFloat(b)).finish())


// Импорт может быть Common.js может быть 
// (например для TypeScript) с использованием Ecmascript
const {getCurrentDate} = require('./dateUtils')
// лучше не делать глобальные переменные
// 
global.testData = '123'
// 
// console.log("getCurrentDate function result", getCurrentDate())
// console.log(global.testData)
// 
//        console.log(process.env)
// 
//        console.log(process.argv)
// 
// console.log("hhh6677777777777777888888888888")

// на подобие break
// 
//        process.exit()
// 
// console.log("crhhhhhhhhhhhhhhhhhhhhhh")


// Терминал
// NODE_ENVVVVVVVVVVVVVVVVVVVVV=development node index.js

// console.log(__dirname)
// console.log(__filename)