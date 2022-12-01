fs = require("fs");

/*creatig a file*/

fs.writeFile("welcome.txt", "hello node", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("data written successfully");
});

/* reading from file */

fs.readFile("welcome.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("data on file: " + data.toString());
});
