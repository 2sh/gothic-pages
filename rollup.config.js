import { spawn } from 'child_process'

import typescript from 'rollup-plugin-typescript2';
//import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
//import json from "@rollup/plugin-json";
import terser from '@rollup/plugin-terser';
//import { header } from 'rollup-plugin-header';
import del from 'rollup-plugin-delete'

import { sync } from "glob"

const production = !process.env.ROLLUP_WATCH

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0)
	}

	return {
		writeBundle() {
			if (server) return
			server = spawn('npm', ['run', 'dev:server'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			})

			process.on('SIGTERM', toExit)
			process.on('exit', toExit)
		}
	};
}

export default {
  input: sync("./src/client/*.ts"),
  output: {
    dir: production
      ? 'build/scripts'
      : 'dev/scripts',
    format: 'es',
    chunkFileNames: '[hash].js',
  },
  plugins: [
    !production && del('dev'),
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
    production && terser(),
    !production && serve(),
    //header({ 'header': `/*
//I see you sniffing around...
//*/`})
  ]
};
