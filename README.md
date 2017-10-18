# Latest build plugin
Log the timestamp of your latest build after it is finished.

After completing a build from your terminal, it will output the timestamp at which the build process ended:
```
   [4] ./src/userinterface/App.js 1.85 kB {0} [built]
    + 6 hidden modules


Latest build finished on Wed Oct 18 2017 12:31:51 GMT+0200 (CEST)
```

## Installation
`npm install latest-build-timestamp-webpack-plugin --save-dev`

## Usage
First, import the plugin in your webpack config:

```
const LatestBuildTimestamp = require('latest-build-timestamp-webpack-plugin');
```

And add it to your plugins array:
```
plugins: [
  new LatestBuildTimestamp();
]
```