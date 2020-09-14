const auth = require("./auth.json");
const plotly = require("plotly")(auth.username, auth.token);

const PreProcessing = (json) => {
  let data = { time: [], down: [], up: [] };
  for (item of json.array) {
    data.time.push(new Date(item.timestamp));
    data.down.push(item.download.bandwidth / 125000);
    data.up.push(item.upload.bandwidth / 125000);
  }
  return data;
};

const avCalc = () => {
  let total = 0;
  for (item of data) {
    total += item.down;
  }
  console.log("AVERAGE:", total / data.length);
};

const main = () => {
  const json = require("./tests.json");
  data = PreProcessing(json);

  let downPlot = {
    x: data.time,
    y: data.down,
    name: "Download Speed",
    type: "scatter",
  };
  let upPlot = {
    x: data.time,
    y: data.up,
    name: "Upload Speed",
    type: "scatter",
  };
  let layout = { fileopt: "overwrite", filename: "Speedtests" };

  plotly.plot([downPlot, upPlot], layout, function (err, msg) {
    if (err) return console.log(err);
    else console.log("Graph uploaded successfully! URL:", msg.url);
  });
};

main();
