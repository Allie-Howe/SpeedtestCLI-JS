# Regular speedtesting using Ookla's Speedtest CLI application

## This repo includes JS code to run intermittent speedtests using the command line application developed by Ookla, save the results into a JSON file, and upload them to a Plotly graph

This means that you will need a Plotly account, available [here](chart-studio.plotly.com) as well as an `auth.json` file containing this account's username and API key. In addition, I used Windows Task Scheduler to effectively and reliably run the `.bat` file after a given amount of time (I used five minute intervals).
