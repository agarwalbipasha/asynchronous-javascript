const problem2 = require("../problem2");

console.log(problem2.readfile('./../data/fs-callbacks/lipsum.txt', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("File read");
    }
}));
