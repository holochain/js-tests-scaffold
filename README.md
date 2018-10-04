# js-tests-scaffold

This is the recommended configuration for developing tests for Holochain Genomes.

It currently includes webpack in its configuration because the javascript execution environment in the [holoconsole](https://github.com/holochain/holosqape) container expects ES5 javascript.

The configuration currently uses [tape](https://github.com/substack/tape) as a testing framework.

These files are copied into the `test` folder of any new Genome that is started using `hcdev init`.