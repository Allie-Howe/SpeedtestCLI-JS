var exec = require("child_process").execFile,
  fs = require("fs");

const run = () => {
  console.log("Running Speedtest CLI command...");
  exec("speedtest.exe", ["-f", "json"], function (err, data) {
    if (err) console.log(err);
    else readFile(JSON.parse(data));
  });
};

const readFile = async (newTest) => {
  fs.readFile("tests.json", "utf8", (err, allTests) => {
    if (err) console.log(err);
    else {
      combineJSON(JSON.parse(allTests), newTest);
    }
  });
};

const combineJSON = (allTests, newTest) => {
  allTests.array.push(newTest);
  writeFile(allTests);
};

const writeFile = (data) => {
  fs.writeFile("tests.json", JSON.stringify(data), (err) => {
    if (err) console.log(err);
    else console.log("Test written to JSON file.");
  });
};

run();
