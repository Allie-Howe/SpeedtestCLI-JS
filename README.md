# Regular speedtesting using Ookla's Speedtest CLI application

## What is this?

This repo includes JS code to run intermittent speedtests using the command line application developed by Ookla, save the results into a JSON file, and upload them to a Plotly graph.

## How do I run it?

The main script requires Node.JS installed on your PC. You can install this from [here](https://nodejs.org/en/). Once this is installed run `npm i` from the command prompt to install the necessary libraries and you're good to go! (If you're simply running the speedtest program `runTests.js` you shouldn't actually need to do this - the only Node package used is Plotly's library)

I used Windows task scheduler to effectively and reliably run the `.bat` file over a given time interval (I used five minutes). In addition to this you'll need a Plotly account in order to upload the data and create a graph, available [here](chart-studio.plotly.com) as well as an `auth.json` file containing this account's username and API key.
