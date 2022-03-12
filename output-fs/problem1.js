const fs = require("fs");

const makeDirectory = (directory) => {
    fs.mkdir(directory, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Directory created");
            setTimeout(() => {
                const data = {
                    name: 'Andrew', 
                    age: 32
                }; 
                for (let count = 0; count < 10; count++) {
                    fs.writeFile(`./${directory}/${count}.js`, JSON.stringify(data), (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log("File created");
                            fs.unlink(`./${directory}/${count}.js`, (err) => {
                                if (err) {
                                    console.error(err);
                                } else {
                                    console.log("File deleted successfully");
                                }
                            })
                        }
                    });
                }
            }, 2000);
            //  console.log("All files created successfully"); 
        }
    });
};





module.exports = {
    makeDirectory   
};