const fs = require("fs");

function readFile(file) {
    fs.readFile(file, (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data.toString());
        return data.toString();
    }
})
}

function createFile(filename) {
    let data = readFile('./../data/fs-callbacks/lipsum.txt');
    console.log(data);

    fs.writeFile(filename, JSON.stringify(data), (err, result) => {
        if (err) {
            console.error(err);
        } else {
            console.log("File created successfully");
        }
    })
}

// // let result = (file, newFile) => {
//     let data = readFile('./../data/fs-callbacks/lipsum.txt');
//     console.log(data,'hello');
//     let newData = data.toString().toUpperCase();
    createFile('./../data/fs-callbacks/filenames.txt');
// }

// result('./../data/fs-callbacks/lipsum.txt', './../data/fs-callbacks/filenames.txt');