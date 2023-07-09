const { log } = require("console");
const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "test"), (err) => {
  if (err) throw err;
  console.log("test folder created...");
  fs.writeFile(
    path.join(__dirname, "test", "hello.txt"),
    "Hello World!",
    (err) => {
      if (err) throw err;
      console.log("File written to...");
      fs.appendFile(
        path.join(__dirname, "test", "hello.txt"),
        " I love Nodejs",
        (err) => {
          if (err) throw err;
          console.log("File appended...");
          fs.readFile(
            path.join(__dirname, "test", "hello.txt"),
            "utf8",
            (err, data) => {
              if (err) throw err;
              console.log(data);
              fs.rename(
                path.join(__dirname, "test", "hello.txt"),
                path.join(__dirname, "test", "helloWorld.txt"),
                (err) => {
                  if (err) throw err;
                  console.log("File renamed...");
                }
              );
            }
          );
        }
      );
    }
  );
});
