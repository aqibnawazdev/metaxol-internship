const fs = require('fs');

let data = ""


//Read steam

let readStream = fs.createReadStream('./file.txt')
readStream.setEncoding("utf-8")

readStream.on('data', function (chunk) {
    data += chunk
})


let newData = "This is paragraph."
readStream.on('end', function (chunk) {
    // console.log(data)
})

//write stream

let writeSream = fs.createWriteStream('file.txt');
writeSream.write(newData, 'UTF8')
writeSream.end()

writeSream.on('finish', function () {
    console.log("Write completed")
})

writeSream.on('error', function (err) {
    console.log(err.stack)
})

//Piping stream

let readerStream = fs.createReadStream('./file.txt');
// let writerStream = fs.createWriteStream('/output.txt')

// readerStream.pipe(writerStream)

//Opening file

console.log("operning file");

fs.open('./file.txt', 'r+', (err, fd) => {
    if (err) {
        console.log(err)
    }
    // console.log("file opened", fd)
})

//Read file

fs.readdir('../ii-intro-to-backend/', function (err, files) {
    if (err) {
        console.log(err)
    }
    files.forEach(function (file) {
        console.log(file)
    })
})