const fs = require("fs");

fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
    if (err) {
        throw err;
    }
    console.log("file contents read");
    console.log(text);

});

