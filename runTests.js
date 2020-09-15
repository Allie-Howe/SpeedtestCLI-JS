var exec = require("child_process").execFile,
  fs = require("fs");

const main = () => {
  console.log("Running Speedtest CLI command...");
  exec("speedtest.exe", ["-f", "json-pretty"], function (err, data) {
    if (err) console.log(err);
    else readAndMerge(JSON.parse(data));
  });
};

const readAndMerge = (newTest) => {
  try {
    var json = require("./tests.json");
  } catch (err) {
    if (err.code === "MODULE_NOT_FOUND") var json = { array: [] };
    else {
      console.log(
        "This error hasn't been checked for. If you're seeing this in the console please contact me on GitHub! https://github.com/howe-oh. Error details:"
      );
      console.log(err);
      return;
    }
  }
  json.array.push(newTest);
  writeFile(json);
};

const writeFile = (data) => {
  fs.writeFile("tests.json", JSON.stringify(data), (err) => {
    if (err) console.log(err);
    else console.log("Test written to JSON file.");
  });
};

main();
