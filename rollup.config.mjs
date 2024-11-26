import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import buble from "@rollup/plugin-buble";
import terser from "@rollup/plugin-terser";

import pkg from "./package.json" with {type: 'json'};

export default [
  // ES5 Non-minified
  {
    input: "index.mjs",
    output: {
      file: pkg.browser,
      format: "umd",
      name: pkg.name,
    },
    plugins: [resolve(), commonjs(), buble({transforms: { dangerousForOf: true }})],
  },
  // ES5 Minified
  {
    input: "index.mjs",
    output: {
      file: pkg.browser.replace(/\.js$/, ".min.js"),
      format: "umd",
      name: pkg.name,
    },
    plugins: [resolve(), commonjs(), buble({transforms: { dangerousForOf: true }}), terser()],
  },
  // ES6 Modules Non-minified
  {
    input: "index.mjs",
    output: {
      file: pkg.browser.replace(/\.js$/, ".mjs"),
      format: "esm",
    },
    plugins: [resolve(), commonjs()],
  },
  // ES6 Modules Minified
  {
    input: "index.mjs",
    output: {
      file: pkg.browser.replace(/\.js$/, ".min.mjs"),
      format: "esm",
    },
    plugins: [resolve(), commonjs(), terser()],
  },
];
