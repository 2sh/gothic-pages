import typescript from 'rollup-plugin-typescript2';
//import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
//import json from "@rollup/plugin-json";
import terser from '@rollup/plugin-terser';
//import { header } from 'rollup-plugin-header';
import del from 'rollup-plugin-delete'

import { sync } from "glob"

export default {
  input: sync("./src/client/*.ts"),
  output: {
    dir: 'dist/scripts',
    format: 'es',
    chunkFileNames: '[hash].js',
  },
  plugins: [
    del({ targets: 'dist' }),
    typescript({ tsconfigOverride: {
      compilerOptions:
      {
        module: "ESNext",
        moduleResolution: "Bundler",
      }
    }}),
    //commonjs(),
    nodeResolve({
      browser: true,
    }),
    //json(),
    terser(),
    //header({ 'header': `/*
//I see you sniffing around...
//*/`})
  ]
};
