const fs = require("fs");



let readfile = (file) => {
    fs.readFile(file, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.log("File read");
            let newData = data.toString().toUpperCase();
            fs.writeFile('./../data/fs-callbacks/filenames.txt', newData, (err, files) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("File copied");
                    fs.readFile('./../data/fs-callbacks/filenames.txt', (err, files) => {
                        if (err) {
                            console.error(err);
                        } else {
                            let newFilesData = files.toString().toLowerCase().split(".").join();
                            fs.writeFile('./../data/fs-callbacks/newFilenames.txt', JSON.stringify(newFilesData), err => {
                                if (err) {
                                    console.error(err);
                                } else {
                                    console.log("new file created");
                                    fs.appendFile('./../data/fs-callbacks/filenames.txt', JSON.stringify('\n\n newFilenames.txt'), err => {
                                        if (err) {
                                            console.error(err);
                                        } else {
                                            console.log("Name of file added successfully");
                                            fs.readFile('./../data/fs-callbacks/filenames.txt', (err, file) =>  {
                                                if (err) {
                                                    console.error(err);
                                                } else {
                                                    console.log("Read filenames.txt");
                                                    let sortedContent = Array.from(file.toString()).sort();
                                                    fs.writeFile('./../data/fs-callbacks/filenames1.txt', JSON.stringify(sortedContent), err => {
                                                        if (err) {
                                                            console.error(err);
                                                        } else {
                                                            console.log("filenames1.txt created with sorted content");
                                                            fs.appendFile('./../data/fs-callbacks/filenames.txt', JSON.stringify('\n\n filenames1.txt'), err => {
                                                                if (err) {
                                                                    console.error(err);
                                                                } else {
                                                                    console.log("file name filenames1.txt added");
                                                                    fs.readFile('./../data/fs-callbacks/filenames.txt', (err, data) => {
                                                                        if (err) {
                                                                            console.error(err);
                                                                        } else {
                                                                            let eachLine = data.toString().split("\\n\\n");
                                                                            let fileName = [];
                                                                            // console.log(eachLine);
                                                                            for (let index = 0; index < eachLine.length; index++) {
                                                                                if (eachLine[index].includes('txt')) {
                                                                                    fileName.push(eachLine[index]);
                                                                                }                                                                                 
                                                                            } fileName = fileName.map(file => {
                                                                                 file = file.split('"').join().split(',');
                                                                                 return file[0].trim();
                                                                            }); console.log(fileName);
                                                                            for (let index = 0; index < fileName.length; index++) {
                                                                                let file = './../data/fs-callbacks/' + fileName[index].trim();
                                                                                console.log(file);
                                                                                fs.unlink(file, err => {
                                                                                    if (err) {
                                                                                        console.error(err);
                                                                                    } else {
                                                                                        console.log("File deleted");
                                                                                    }
                                                                                })
                                                                            }
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                            
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
            
        }
    });
};

module.exports = { readfile };