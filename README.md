# js-tests-scaffold

This is a recommended configuration for developing tests for Holochain DNA packages. The point of these files are to write tests that can successfully run within node using the [`holochain-nodejs`](https://github.com/holochainholochain-nodejs) Holochain container environment.

To get proper assertions and formatted output we want to use existing JS scripting frameworks. The configuration currently uses [tape](https://github.com/substack/tape) as a testing framework. We chose Tape for now because of its minimal footprint.

These files are included into the `test` folder of any new DNA source code that is started using `hc init`.

Dependencies are installed by running `npm install`.

Javascript build step is done by running `npm run build`. This places a new file called `bundle.js` within a `dist` folder, within this folder.

Note that those steps are performed automatically by `hc test`.

**Note about default configuration with TAPE testing**: If you use this default configuration with Tape for testing, to get an improved CLI visual output (with colors! and accurate exit codes), we recommend adjusting the command you use to run tests as follows:
```
hc test | test/node_modules/faucet/bin/cmd.js
```