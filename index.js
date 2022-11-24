// Path module
const path = require('path');
// Normalization
// console.log('normalization: ' + path.normalize('/test/test//2slashes/1slash/..'))
// // Join
// console.log('joint path: ' + path.join('/test','test1', '2slashes/1slash', '..'))
// // Resolve
// console.log('resolve: ' + path.resolve('main.js'));
// // extName
// console.log('ext name: ' + path.extname('main.js'));

// Полный путь из относительного
console.log("gg", path.resolve('dateUtils.js'));


// FS module 

// fs.readFileSync(<path>, <encoding>)
// fs.writeFileSync(<path>, < content>, <encoding>)
// fs.renameSync(<oldPath>,<newPath>)
// fs.readdirSync(<path>)
// fs.unlinkSync(<path>)



// const fs = require('fs');
const fs = require('fs').promises;


// errorFirstCollback
// fs.readFile(path.resolve('./data.txt') , 'utf8', (error, data) => {

// }
// Асинхронное чтение файла
    fs.readFile('./package.json', 'utf8', (error, data) => {
    if (error) {
        console.error(error)
    }
    console.log(data);
});

// Синхронное чтение файла. Не рекомендуется!!!
// const data = fs.readFileSync(path.resolve('./data.txt'), 'utf8');
// console.log(data);

// В версии с промисами  (асинхронно)
// Либо
// fs.readFile(path.resolve("./data.txt"), 'utf-8')
//     .then(data => console.log(data))
//     .catch(error => console.error(error))

// console.log('12313123')
// console.log('ggggg')

// Либо
(async () => {
    try {
        const data =  await fs.readFile(path.resolve("./data.txt"), 'utf-8')
        console.log(data);

        const newContent = `${data} school`
        await fs.writeFile('./data1.txt', newContent, 'utf8')
        // await fs.rename('dateUtils.js', 'dateUtilsNewName.js')
        // await fs.rename('dateUtilsNewName.js', './tmp/dateUtilsNewName.js')
        console.log(await fs.readdir('./tmp'))
        // Удалить файл
        await fs.unlink('./tmp/dateUtilsNewName.js')
        fs.appendFile('./data1.txt', 'lecture', 'utf8')
    } catch (error) {
        console.error(error)
    }
})();
