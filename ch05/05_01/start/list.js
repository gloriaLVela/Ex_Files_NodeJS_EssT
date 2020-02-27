const fs = require("fs");

console.log("started reading files");

fs.readdir("./assets", (err, files) => {
    if (err) {
        throw err;
    }
    
    console.log(files);
    console.log("complete");
});

